import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ChatCard from './components/ChatCard';
import Form from 'react-bootstrap/Form';
import { askChatGpt } from './scripts/apiCalls';

import './styles/App.css'

export default function App() {
  const [formInput, setFormInput] = useState("")
  const [inputResponse, setInputResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

    askChatGpt(formInput).then((resp) => {
      const ir = {
        id: resp.id,
        input: formInput,
        response: resp.choices[0].message.content,
      }
      setInputResponse((prevState) => [...prevState, ir]);
      setFormInput("");
    })
  }

  return (
    <div className="m-3">
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Gimme a Prompt"
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
        inputResponse.map((item) => <ChatCard key={item.id} input={item.input} response={item.response} />)
      }
    </div>
  )
}
