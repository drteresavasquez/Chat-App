import Card from 'react-bootstrap/Card';
import Prism from "prismjs";
import "../styles/prism.css";
import { useEffect } from 'react';

function ChatCard({ input, response }) {

  useEffect(() =>{
    Prism.highlightAll()
  }, []);

  return (
    <Card className="m-1">
      <Card.Header>{input}</Card.Header>
      <Card.Body>
        <Card.Text>
          {response}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChatCard;