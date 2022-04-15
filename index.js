let UserPostList = document.getElementById("Usercontent");
let UserDropdown = document.getElementById("userDropdown");
let users = {}; //list of users
let userPost = {}; //post json

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  return await myJson;
};

//anonymous function for User API
(async () => {
  users = await fetchUsers();
  console.log(await fetchUsers());
  await displayDropdown();
})();

//fetch post for users
const fetchPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  return await myJson;
};

//anonymous function for post API
(async () => {
  userPost = await fetchPost();
})();

//select function for dropdown
const getPost = (name) => {
  if (name == "Choose") return;
  displayPost();
};

//build list of post and display
const displayPost = () => {
  let list = "<ul>";

  //loop though post and build html list
  for (let i = 0; i < userPost.length; i++) {
    list +=
      "<li>" +
      i +
      " - " +
      userPost[i].title +
      "<br></br>" +
      userPost[i].body +
      "</li>" +
      "<br></br>";
  }

  list += "</ul>";

  UserPostList.innerHTML = list;
};

const displayDropdown = () => {
  let list = '<select id="userSelect" onchange="getPost(this.value)">';
  list += '<option value="Choose" selected="selected">Choose</option>';

  for (let i = 0; i < users.length; i++) {
    list += '<option value="${users[i].id}">' + users[i].name + "</option>";
  }

  list += "</select>";
  UserDropdown.innerHTML = list;
};
