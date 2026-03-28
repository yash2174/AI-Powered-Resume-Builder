import Icon from './common/Icon';

/* Reusable Inputs */

const Input = ({ label, value, onChange, placeholder = '' }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
    />
  </div>
);

const Textarea = ({ label, value, onChange, placeholder = '', rows = 4 }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
    />
  </div>
);

/* Section Wrapper */

const FormSection = ({ title, children, onAdd }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      {onAdd && (
        <button
          onClick={onAdd}
          className="flex items-center gap-1 text-sm text-primary hover:text-secondary font-semibold"
        >
          <Icon name="add" className="w-4 h-4" /> Add
        </button>
      )}
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

/*Main Form */

const ResumeForm = ({ data, dispatch }) => {
  const handlePersonalChange = (field, value) => {
    dispatch({ type: 'UPDATE_PERSONAL', payload: { [field]: value } });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch({
        type: 'UPDATE_PERSONAL',
        payload: { profilePhoto: reader.result },
      });
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoRemove = () => {
    dispatch({ type: 'UPDATE_PERSONAL', payload: { profilePhoto: '' } });
  };

  const handleSummaryChange = (e) => {
    dispatch({ type: 'UPDATE_SUMMARY', payload: e.target.value });
  };

  const handleFieldChange = (section, index, field, value) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { section, index, field, value },
    });
  };

  const handleAddItem = (section) => {
    dispatch({ type: 'ADD_ITEM', payload: { section } });
  };

  const handleDeleteItem = (section, index) => {
    dispatch({ type: 'DELETE_ITEM', payload: { section, index } });
  };

  return (
    <div>
      {/* Personal */}
      <FormSection title="Personal Details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Full Name" value={data.personal.fullName} onChange={(e) => handlePersonalChange('fullName', e.target.value)} />
          <Input label="Job Title" value={data.personal.jobTitle} onChange={(e) => handlePersonalChange('jobTitle', e.target.value)} />
          <Input label="Email" value={data.personal.email} onChange={(e) => handlePersonalChange('email', e.target.value)} />
          <Input label="Phone" value={data.personal.phone} onChange={(e) => handlePersonalChange('phone', e.target.value)} />
          <Input label="Address" value={data.personal.address} onChange={(e) => handlePersonalChange('address', e.target.value)} />
          <Input label="LinkedIn" value={data.personal.linkedin} onChange={(e) => handlePersonalChange('linkedin', e.target.value)} />
          <Input label="GitHub" value={data.personal.github} onChange={(e) => handlePersonalChange('github', e.target.value)} />

          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
            <div className="mt-1 flex items-center gap-4">
              {data.personal.profilePhoto ? (
                <img src={data.personal.profilePhoto} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-200" />
              )}

              <input
                type="file"
                id="photo-upload"
                className="hidden"
                accept="image/*"
                onChange={handlePhotoUpload}
              />

              <label htmlFor="photo-upload" className="cursor-pointer bg-white py-2 px-3 border rounded-md text-sm">
                {data.personal.profilePhoto ? 'Change' : 'Upload'}
              </label>

              {data.personal.profilePhoto && (
                <button onClick={handlePhotoRemove} className="text-red-500 text-sm">
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </FormSection>

      {/* Summary */}
      <FormSection title="Summary">
        <Textarea label="Professional Summary" value={data.summary} onChange={handleSummaryChange} />
      </FormSection>

      {/* Experience */}
      <FormSection title="Experience" onAdd={() => handleAddItem('experience')}>
        {data.experience.map((exp, index) => (
          <div key={exp.id} className="border p-4 rounded-md relative space-y-2">
            <Input label="Role" value={exp.role} onChange={(e) => handleFieldChange('experience', index, 'role', e.target.value)} />
            <Input label="Company" value={exp.company} onChange={(e) => handleFieldChange('experience', index, 'company', e.target.value)} />
            <Input label="Date" value={exp.date} onChange={(e) => handleFieldChange('experience', index, 'date', e.target.value)} />
            <Textarea label="Description" value={exp.description} onChange={(e) => handleFieldChange('experience', index, 'description', e.target.value)} />
            <button onClick={() => handleDeleteItem('experience', index)} className="absolute top-2 right-2 text-red-500">
              <Icon name="delete" className="w-5 h-5" />
            </button>
          </div>
        ))}
      </FormSection>

      {/* Education */}
      <FormSection title="Education" onAdd={() => handleAddItem('education')}>
        {data.education.map((edu, index) => (
          <div key={edu.id} className="border p-4 rounded-md relative space-y-2">
            <Input label="Degree" value={edu.degree} onChange={(e) => handleFieldChange('education', index, 'degree', e.target.value)} />
            <Input label="Institution" value={edu.institution} onChange={(e) => handleFieldChange('education', index, 'institution', e.target.value)} />
            <Input label="Date" value={edu.date} onChange={(e) => handleFieldChange('education', index, 'date', e.target.value)} />
            <Textarea label="Description" value={edu.description} onChange={(e) => handleFieldChange('education', index, 'description', e.target.value)} />
            <button onClick={() => handleDeleteItem('education', index)} className="absolute top-2 right-2 text-red-500">
              <Icon name="delete" className="w-5 h-5" />
            </button>
          </div>
        ))}
      </FormSection>

      {/* Skills */}
      <FormSection title="Skills" onAdd={() => handleAddItem('skills')}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.skills.map((skill, index) => (
            <div key={skill.id} className="relative">
              <Input label={`Skill ${index + 1}`} value={skill.name} onChange={(e) => handleFieldChange('skills', index, 'name', e.target.value)} />
              <button onClick={() => handleDeleteItem('skills', index)} className="absolute top-7 right-2 text-red-500">
                <Icon name="delete" className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </FormSection>

      {/* Custom Sections */}
      <FormSection title="Custom Sections" onAdd={() => handleAddItem('customSections')}>
        {data.customSections.map((section, index) => (
          <div key={section.id} className="border p-4 rounded-md relative space-y-2">
            <Input label="Section Title" value={section.title} onChange={(e) => handleFieldChange('customSections', index, 'title', e.target.value)} />
            <Textarea label="Content" value={section.content} onChange={(e) => handleFieldChange('customSections', index, 'content', e.target.value)} />
            <button onClick={() => handleDeleteItem('customSections', index)} className="absolute top-2 right-2 text-red-500">
              <Icon name="delete" className="w-5 h-5" />
            </button>
          </div>
        ))}
      </FormSection>
    </div>
  );
};

export default ResumeForm;
