// posts = [
//   {
//     title: "first book",
//     price: 100,
//     time: new Date(),
//   },
//   {
//     title: "second book",
//     price: 200,
//     time: new Date(),
//   },
// ];

// function getposts() {
//   setTimeout(() => {
//     let output = "";

//     posts.forEach((post) => {
//       output += `<li>${post.title} </li>`;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const err = false;
//       if (!err) {
//         resolve();
//       } else {
//         reject("error something went wrong");
//       }
//     }, 2000);
//   });
// }
// function deletePost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (posts.length > 0) {
//         posts.pop();
//         resolve();
//       } else {
//         reject("array is empty now");
//       }
//     }, 1000);
//   });
// }

// createPost({ title: "third book", price: 300 }).then(function () {
//   getposts();
//   deletePost().then(function () {
//     getposts();
//     deletePost().then(function () {
//       getposts();
//       deletePost().then(function () {
//         getposts();
//         deletePost().catch(function (err) {
//           console.log("error occured", err);
//         });
//       });
//     });
//   });
// });

// setTimeout(() => {
//   createPost({ title: "forth book", price: 400 }).then(function () {
//     getposts();

//     deletePost().then(function () {
//       getposts();
//     });
//   });
// }, 7000);

//promise.all

// const promise1 = Promise.resolve("hello world");
// const promise2 = 4;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, "good bye", 2000);
// });

// Promise.all([promise1, promise2, promise3]).then(function (values) {
//   console.log(values);
// });
function deletePost(){
return new Promise((resolve, reject) => {
user.pop()
resolve(user)
})

}

user=[
  {
    name: "John",

  },
  {
    name: "rahul",
  }
]

p1=new Promise((resolve, reject) => {
 
  resolve(user)
})
p2=new Promise((resolve, reject) => {
  resolve(new Date().getTime())

})
Promise.all([p1, p2]).then(function(user){
  console.log(user)

})
deletePost().then(function(value){
  console.log(value)
    })