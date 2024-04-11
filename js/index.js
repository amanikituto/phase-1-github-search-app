// ... (fetch, searchUsers, fetchRepos functions as before)

// DOM element references
const searchForm = document.getElementById('github-form');
const searchInput = document.getElementById('search');
const userList = document.getElementById('user-list'); 
const reposList = document.getElementById('repos-list'); 
const toggleButton = document.getElementById('toggleSearch'); // Assuming you add this button

// Function to display search results
function displaySearchResults(users) {
  userList.innerHTML = ''; // Clear previous results 

  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${user.avatar_url}" alt="${user.login} avatar">
      <h3><a href="${user.html_url}" target="_blank">${user.login}</a></h3>
    `;
    userList.appendChild(listItem);

    // Add click listener to each list item
    listItem.addEventListener('click', () => {
      fetchRepos(user.login);
    });
  });
}

// Function to display repo results
function displayRepoResults(repos) {
  reposList.innerHTML = ''; // Clear previous results

  repos.forEach(repo => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
    `;
    reposList.appendChild(listItem);
  });
}

// ... (displayError, event listeners remain mostly the same) 
