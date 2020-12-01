const searchUsers = (name) =>
  fetch(
    `http://jsonplaceholder.typicode.com/users?name_like=${name}`,
  ).then((response) => response.json());

const debounceEvent = (fn, wait = 1000, timeout) => (...args) => {
  clearTimeout(timeout, (timeout = setTimeout(() => fn(...args), wait)));
};

const handleKeyUp = (event) =>
  searchUsers(event.target.value).then((users) =>
    console.log(users.map((u) => u.name)),
  );

document
  .querySelector('input[name="search"]')
  .addEventListener('keyup', debounceEvent(handleKeyUp, 1000));
