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
  return new Promise((resolve,reject)=>{

    setTimeout(() => {
      posts.push(post );
  const err=true
  if(!err){
    resolve("good")
  }else{
    reject("error something went wrong")
  }
      
    }, 2000);
  })
  
}

 createPost({title:"forth book",price:400})
 .then(getposts)
 .catch((err)=>console.log(err))

