posts = [
  {
    title: "first book",
    price: 100,
    time: new Date(),
  },
  {
    title: "second book",
    price: 200,
    time: new Date(),
  },
];

function getposts() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title} </li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const err = false;
      if (!err) {
        resolve();
      } else {
        reject("error something went wrong");
      }
    }, 2000);
  });
}
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 2000);
  });
}

createPost({ title: "third book", price: 300 })
  .then(function () {
    getposts();
    deletePost().then(function () {
      getposts();
      deletePost().then(function () {
        getposts();
        deletePost().then(function () {
          getposts();
        });
      });
    });
  })
  .catch((err) => console.log(err));
