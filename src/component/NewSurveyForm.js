import React from 'react';
import PropTypes from 'prop-types';

export default function NewSurveyForm(props){
  
  function newSurveyFormSubmissionHandler(e) {
    e.preventDefault();
    props.onSurveyQuestionSubmission({
      question: e.target.question.value
    })
  }
  
  return (
    <>
      <form onSubmit={newSurveyFormSubmissionHandler}>
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

NewSurveyForm.propTypes = {
  newSurveyFormSubmissionHandler: PropTypes.func,
}