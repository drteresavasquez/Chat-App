export const askChatGpt = (input) => {
  const payload = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": input }]
  }
  const mySecret = process.env['apikey'];
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${mySecret}`);


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(payload)
  };

  return fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



