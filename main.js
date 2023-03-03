var blog = ["blog1", "blog2", "blog3"];

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const date = new Date();
      if (date != "") {
        resolve(date);
      } else {
        reject("ERROR");
      }
    }, 5000);
  });
}

function createPost(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      blog.push(value);
      resolve(value);
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var data = blog.pop();
      resolve(data);
    }, 1000);
  });
}

function getPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            arr = []
            // for (var i in blog){
            //     arr.push(blog[i])
            // }
            arr = blog.map(x => x)
            resolve(arr)
          }, 1000);
    })
}


console.log("before create post time:");
updateLastUserActivityTime()
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log(e);
  })
  .then(() => {
    Promise.all([updateLastUserActivityTime(), createPost('blog4')]).then((values) => {
      console.log(values);
    })
    .then(() =>
    deletePost().then((e) => {
      console.log(e);
    }).then(()=>{
        getPost().then(e=>{console.log(e)})
    }))
  
  
  })
  
  
