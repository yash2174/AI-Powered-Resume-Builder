import app from './src/app.js';

const PORT = process.env.PORT || 7000;


app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
