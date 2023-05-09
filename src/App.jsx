import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { askChatGpt } from './apiCalls';

import './App.css'

export default function App() {
  const [formInput, setFormInput] = useState("")
  const [inputResponse, setInputResponse] = useState([]);

  // user enters prompt into text field
  // capture text, send to API, wait on response
  // after response, update state (add response to end of array)
  // also capture user input in state (for now...)
  // show content on the DOM

  const handleChange = (e) => {
    const { value } = e.target;
    setFormInput(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }



  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Gimme a Prompt"
          className="m-3"
        >
          <Form.Control
            type="text"
            placeholder="Gimme a Prompt"
            value={formInput}
            onChange={handleChange}
            required />
        </FloatingLabel>
      </Form>
      {
        inputResponse.map((item) => (
          <>
            <p>{item.input}</p>
            <p>{item.response}</p>
          </>
        ))
      }
    </>
  )
}
