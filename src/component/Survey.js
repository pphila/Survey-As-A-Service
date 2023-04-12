import React from "react";
import PropTypes from "prop-types";

export default function Survey(props) {
  function handleAnswerFormSubmission(event) {
    event.preventDefault();
    props.onAnswerSubmission({
      answer: event.target.answer.value
      //id: potentially.append.question.id?
    })
  }
  return (
    <>
      <h3>{props.surveyName}</h3>
      <p>{props.question}</p>
      <form onSubmit={handleAnswerFormSubmission}>
        <input
          type="radio"
          name="strongly-disagree"
          value="1"/>
        <label for="strongly-disagree">Strongly Disagree</label><br />
        <input
          type="radio"
          name="moderately-disagree"
          value="2"/>
        <label for="moderately-disagree">Moderately Disagree</label><br />
        <input
          type="radio"
          name="neutral"
          value="3"/>
        <label for="neutral">Neutral</label><br />
        <input
          type="radio"
          name="moderately-agree"
          value="4"/>
        <label for="moderately-agree">Moderately Agree</label><br />
        <input
          type="radio"
          name="strongly-agree"
          value="5"/>
        <label for="strongly-agree">Strongly Agree</label><br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}