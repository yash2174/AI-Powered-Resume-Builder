import React, { useReducer, useEffect, useState, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DUMMY_RESUME_DATA,
  COLOR_PALETTES,
  FONT_FAMILIES,
  BLANK_RESUME_DATA,
} from '../constants.js';
import ResumePreview from './ResumePreview';
import ResumeForm from './ResumeForm';
import Icon from './common/Icon';
import { AuthContext } from '../context/AuthContext';
import { resumeService } from '../services/resumeService';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const getInitialState = (email) => ({
  data: {
    ...BLANK_RESUME_DATA,
    personal: { ...BLANK_RESUME_DATA.personal, email: email || '' },
  },
  style: {
    templateId: 1,
    color: COLOR_PALETTES[0].color,
    fontFamily: FONT_FAMILIES[0].value,
    fontSize: 1,
  },
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA': return { ...action.payload };
    case 'SET_TEMPLATE': {
      const templateData = DUMMY_RESUME_DATA[action.payload - 1];
      return { ...state, style: { ...state.style, templateId: action.payload }, data: { ...templateData, personal: state.data.personal } };
    }
    case 'SET_COLOR': return { ...state, style: { ...state.style, color: action.payload } };
    case 'SET_FONT_FAMILY': return { ...state, style: { ...state.style, fontFamily: action.payload } };
    case 'SET_FONT_SIZE': return { ...state, style: { ...state.style, fontSize: action.payload } };
    case 'UPDATE_PERSONAL': return { ...state, data: { ...state.data, personal: { ...state.data.personal, ...action.payload } } };
    case 'UPDATE_SUMMARY': return { ...state, data: { ...state.data, summary: action.payload } };
    case 'ADD_ITEM': {
      const { section } = action.payload;
      const newItem =
        section === 'experience' ? { id: Date.now().toString(), company: '', role: '', date: '', description: '' }
        : section === 'education' ? { id: Date.now().toString(), institution: '', degree: '', date: '', description: '' }
        : section === 'skills' ? { id: Date.now().toString(), name: '' }
        : { id: Date.now().toString(), title: 'New Section', content: '' };
      return { ...state, data: { ...state.data, [section]: [...state.data[section], newItem] } };
    }
    case 'DELETE_ITEM': {
      const { section, index } = action.payload;
      const items = [...state.data[section]];
      items.splice(index, 1);
      return { ...state, data: { ...state.data, [section]: items } };
    }
    case 'UPDATE_FIELD': {
      const { section, index, field, value } = action.payload;
      const items = [...state.data[section]];
      items[index] = { ...items[index], [field]: value };
      return { ...state, data: { ...state.data, [section]: items } };
    }
    default: return state;
  }
};

const TemplateThumbnail = ({ id, isActive, onClick }) => (
  <button onClick={onClick}
    className={`border-2 rounded-lg p-2 transition w-full ${isActive ? 'border-primary ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-400'}`}>
    <div className="h-32 bg-gray-100 rounded flex flex-col items-center justify-center p-2 text-gray-500 text-sm">
      <div className={`w-full h-4 ${id === 1 || id === 3 ? 'bg-blue-300' : 'bg-gray-300'}`}></div>
      <p className="mt-2 font-semibold">Template {id}</p>
    </div>
  </button>
);

const ResumeBuilder = () => {
  const location = useLocation();
  const { user, token } = useContext(AuthContext);
  const initialResumeDataFromExplore = location.state?.resumeData;

  const [state, dispatch] = useReducer(reducer, getInitialState(user?.email));
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const saveTimeoutRef = useRef(null);

  useEffect(() => {
    if (initialResumeDataFromExplore && user) {
      const templateIndex = DUMMY_RESUME_DATA.findIndex(d => d.personal.fullName === initialResumeDataFromExplore.personal.fullName);
      const templateId = templateIndex !== -1 ? templateIndex + 1 : 2;
      dispatch({ type: 'LOAD_DATA', payload: { data: initialResumeDataFromExplore, style: { ...state.style, templateId } } });
      window.history.replaceState({}, document.title);
      window.scrollTo(0, 0);
      setIsDataLoaded(true);
    }
  }, [initialResumeDataFromExplore, user]);

  useEffect(() => {
    const fetchResume = async () => {
      if (user && token && !initialResumeDataFromExplore) {
        try {
          const savedResume = await resumeService.getResume(token);
          if (savedResume) dispatch({ type: 'LOAD_DATA', payload: savedResume });
          else dispatch({ type: 'LOAD_DATA', payload: { data: DUMMY_RESUME_DATA[0], style: state.style } });
        } catch { console.info('No saved resume found'); }
      }
      setIsDataLoaded(true);
    };
    fetchResume();
  }, [user, token, initialResumeDataFromExplore]);

  useEffect(() => {
    if (user && token && isDataLoaded) {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => {
        resumeService.saveResume(state, token).catch(console.error);
      }, 1500);
    }
    return () => saveTimeoutRef.current && clearTimeout(saveTimeoutRef.current);
  }, [state, user, token, isDataLoaded]);

  /* FINAL PDF Download */
  const handleDownload = async () => {
  const resumeElement = document.getElementById('resume-preview-content');
  if (!resumeElement) return;

  setIsDownloading(true);

  try {
    // Hide divider lines
    const dividers = resumeElement.querySelectorAll('.resume-page-divider');
    dividers.forEach(d => d.style.display = 'none');

    // Wait a bit
    await new Promise(r => setTimeout(r, 150));

    // Capture exactly what user sees (scaled preview)
    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    });

    // Restore divider lines
    dividers.forEach(d => d.style.display = '');

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: 'a4'
    });

    const A4_WIDTH = 595.28;
    const A4_HEIGHT = 841.89;

    const imgWidth = A4_WIDTH;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // fit into single page
    const finalHeight = imgHeight > A4_HEIGHT ? A4_HEIGHT : imgHeight;

    pdf.addImage(
      imgData,
      'PNG',
      0,
      0,
      A4_WIDTH,
      finalHeight
    );

    const fileName = state.data.personal.fullName
      ? `${state.data.personal.fullName.replace(/\s+/g, '_')}_Resume.pdf`
      : 'Resume.pdf';

    pdf.save(fileName);

  } catch (err) {
    console.error('PDF generation failed:', err);
  } finally {
    setIsDownloading(false);
  }
};
  if (!isDataLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin h-32 w-32 border-t-2 border-b-2 border-primary rounded-full" />
      </div>
    );
  }

  return (
    <div className="bg-neutral">
      <div className="container mx-auto px-4 py-8">

        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-700">1. Choose a Base Template</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {[1, 2, 3, 4].map((id) => (
                <TemplateThumbnail key={id} id={id}
                  isActive={state.style.templateId === id}
                  onClick={() => dispatch({ type: 'SET_TEMPLATE', payload: id })} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-700">2. Live Preview:-</h2>
          
            <div className="w-full overflow-hidden flex justify-center"> 
               <div className="w-full max-w-3xl">
            <ResumePreview data={state.data} style={state.style} />
            </div>
            </div>
          
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-700">3. Customize Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Color Palette</label>
              <div className="flex gap-2">
                {COLOR_PALETTES.map(({ name, color }) => (
                  <button key={name}
                    onClick={() => dispatch({ type: 'SET_COLOR', payload: color })}
                    className={`w-8 h-8 rounded-full ${color} ${state.style.color === color ? 'ring-2 ring-blue-500' : ''}`} />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Font Family</label>
              <select value={state.style.fontFamily}
                onChange={(e) => dispatch({ type: 'SET_FONT_FAMILY', payload: e.target.value })}
                className="w-full border rounded-md p-2">
                {FONT_FAMILIES.map(({ name, value }) => (
                  <option key={name} value={value}>{name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Font Size</label>
              <input type="range" min="0.8" max="1.2" step="0.05"
                value={state.style.fontSize}
                onChange={(e) => dispatch({ type: 'SET_FONT_SIZE', payload: parseFloat(e.target.value) })}
                className="w-full" />
              <div className="text-xs text-center mt-1">{Math.round(state.style.fontSize * 100)}%</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-700">4. Edit Content</h2>
          <ResumeForm data={state.data} dispatch={dispatch} />
        </div>

        <div className="text-center">
          <button onClick={handleDownload} disabled={isDownloading}
            className="bg-accent text-white px-8 py-3 rounded-md disabled:opacity-60 disabled:cursor-not-allowed">
            {isDownloading ? 'Generating PDF…' : 'Download as PDF'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResumeBuilder;