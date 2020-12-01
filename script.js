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

const debounceEvent = (fn, wait, timeout) => (...args) => {
  clearTimeout(timeout, (timeout = setTimeout(() => fn(...args), wait)));
};

function setLoading(isLoading) {
  if (isLoading) {
    const listHeader = document.querySelector(
      'div.list-container > .list-header',
    );

    const loadingElement = document.createElement('i');
    loadingElement.dataset.feather = 'loader';

    listHeader.append(loadingElement);
    feather ? feather.replace() : null;
  } else {
    const listHeader = document.querySelector(
      'div.list-container > .list-header',
    );

    const loadingElement = listHeader.querySelector('svg');

    listHeader.removeChild(loadingElement);
  }
}

const handleKeyUp = async (event) => {
  if (!event.target.value || event.target.value.trim() === 0) return;

  setLoading(true);

  const users = await searchUsers(event.target.value);

  renderUsers(users.map((user) => user.name));

  setLoading(false);
};

document
  .querySelector('input[name="search"]')
  .addEventListener('keyup', debounceEvent(handleKeyUp, 700));
