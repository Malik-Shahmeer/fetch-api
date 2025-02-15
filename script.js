const newUserBtn = document.getElementById("new-user-btn");
const userContainer = document.getElementById("user-container");

async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];
    return user;
  } catch (error) {
    console.error("Error fetching random user:", error);
  }
}



function displayUser(user) {
  userContainer.innerHTML = `
        <img src="${user.picture.large}" alt="User Image">
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
    `;
}

newUserBtn.addEventListener("click", async () => {
  const user = await fetchRandomUser();
  if (user) {
    displayUser(user);
  }
});

window.onload = async () => {
  const user = await fetchRandomUser();
  if (user) {
    displayUser(user);
  }
};
