// Define async function to fetch user data
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    // Fetch data
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear loading message
    dataContainer.innerHTML = '';

    // Create list of users
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching data:', error);
  }
}

// Run fetchUserData after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
