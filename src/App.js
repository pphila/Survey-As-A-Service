import React from 'react';
import Navbar from './component/Navbar';
// import SurveyControl from './SurveyControl';
import Survey from './component/Survey';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      {/* <SurveyControl /> */}
      <Survey />
    </>
  );
}

export default App;
