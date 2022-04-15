let UserPostList = document.getElementById("userContent");
let UserDropdown = document.getElementById("userDropdown");
let users = {};
let userPost = {};

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const myJson = await response.json(); //extract JSON from the http response
  return await myJson;
};

//initial load of users from api
(async () => {
  users = await fetchUsers();
  await displayDropdown();
})();

const fetchPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const myJson = await response.json(); //extract JSON from the http response
  return await myJson;
};

//initial load of posts from api
(async () => {
  userPost = await fetchPost();
})();

//return user post
const displayPost = (userID) => {
  if (userID == "Choose") return;

  let list = "<ul>";

  for (let i = 0; i < userPost.length; i++) {
    if (userPost[i].userId != userID) continue;
    list +=
      "<li>" +
      userPost[i].title +
      "<br></br>" +
      userPost[i].body +
      "</li>" +
      "<br></br>";
  }
  list += "</ul>";
  UserPostList.innerHTML = list;
};

//return dropdown with users
const displayDropdown = () => {
  let list = '<select id="userSelect" onchange="displayPost(this.value)">';
  list += '<option value="Choose" selected="selected">Choose</option>';

  for (let i = 0; i < users.length; i++) {
    list +=
      '<option value="' + users[i].id + '">' + users[i].name + "</option>";
  }

  list += "</select>";
  UserDropdown.innerHTML = list;
};
