import React from 'react';
import PropTypes from 'prop-types';

export default function NewSurveyForm(props){
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='question'
          placeholder='Type Your Question'
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}