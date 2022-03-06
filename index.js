function submitData(userName, userEmail){

  const userData = {
    name: `${userName}`,
    email: `${userEmail}`,
  }
  const configurationObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userData),
  }
  
  //SEND DATA
  return fetch('http://localhost:3000/users', configurationObj)
  .then(response => response.json())
  .then(data => {
    const element = document.createElement('div');
    element.textContent = `New id value: ${data.id}`;
    document.body.appendChild(element);
  })
  .catch(error => {
    const element = document.createElement('div');
    element.textContent = `Error message: ${error.message}`;
    document.body.appendChild(element);
  })
}
submitData();