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
      if(posts.length>0){
      posts.pop();
      resolve();
      }else{
        reject("array is empty now")
      }
    }, 1000);


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
          deletePost()
          .catch(function(err){
            console.log("error occured",err)
          })

        });
      });
    });
  })


  setTimeout(()=>{
    createPost({title:"forth book", price: 400})
    .then(function(){
      getposts()
    
   deletePost().then(function(){
    getposts()
   })
      
    })
  },7000)
 


  