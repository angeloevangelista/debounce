const searchUsers = (name) =>
  fetch(
    `http://jsonplaceholder.typicode.com/users?name_like=${name}`,
  ).then((response) => response.json());

const renderUsers = (usernames) => {
  const listElement = document.getElementById('user-list');

  listElement.innerHTML = '';

  usernames.forEach((username) => {
    const listItem = document.createElement('li');
    listItem.textContent = username;

    listElement.append(listItem);
  });
};

const debounceEvent = (fn, wait = 1000, timeout) => (...args) => {
  clearTimeout(timeout, (timeout = setTimeout(() => fn(...args), wait)));
};

const handleKeyUp = (event) =>
  searchUsers(event.target.value).then((users) =>
    renderUsers(users.map((u) => u.name)),
  );

document
  .querySelector('input[name="search"]')
  .addEventListener('keyup', debounceEvent(handleKeyUp, 1000));
