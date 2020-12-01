let timeout = null;

const searchUsers = (name) =>
  fetch(
    `http://jsonplaceholder.typicode.com/users?name_like=${name}`,
  ).then((response) => response.json());

function handleKeyUp(event) {
  clearTimeout(timeout);

  timeout = setTimeout(async () => {
    searchUsers(event.target.value).then((users) =>
      console.log(users.map((u) => u.name)),
    );
  }, 1000);
}

document
  .querySelector('input[name="search"]')
  .addEventListener('keyup', handleKeyUp);
