import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import SurveyQuestion from './SurveyQuestion';
import NewSurveyQuestionForm from './NewSurveyQuestionForm';
import { Link } from "react-router-dom";
import db from "./../firebase.js";
import { collection, addDoc, doc } from "firebase/firestore";

export default function SurveyControl() {

  // const [formVisible, setFormVisibleOnPage] = useState(false);

  const handleNewQuestionSubmission = async (newQuestion) => {
    await addDoc(collection(db, "questions"), newQuestion);
  }

  

  return(
    <>
      <NewSurveyQuestionForm onSurveyQuestionSubmission={handleNewQuestionSubmission}/>
      <Link to="/new-survey-question">Create Survey</Link>
    </>
  )

}