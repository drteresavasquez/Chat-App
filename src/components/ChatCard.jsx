import Card from 'react-bootstrap/Card';

function ChatCard({ input, response }) {
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