import React from 'react';
import PropTypes from 'prop-types';

export default function NewSurveyQuestionForm(props){
  
  function handleSurveyFormSubmission(e) {
    e.preventDefault();
    console.log(e.target.question.value)
    props.onSurveyQuestionSubmission({
      question: e.target.question.value
    });
  }
  
  return (
    <>
      <form onSubmit={handleSurveyFormSubmission}>
        <input
          type='text'
          name='question'
          placeholder='Type Your Question'
        />
        <button type="submit">Submit Question</button>
      </form>
    </>
  );
}

NewSurveyQuestionForm.propTypes = {
  onSurveyQuestionSubmission: PropTypes.func,
}