/* settle means reject or resolve 
resolve means promise has setteled sucessfully
reject means promise has not settled  successfully.*/

const { log } = require("console");

console.log('java scrip[t is  running');


function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3000);
    }

    )
}

async function getData() {
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await x.json()
   console.log(data)
    // .then(response => response.json())
    // .then(json => console.log(json))
    console.log(x);
    return 455
    
}

async function main() {

    console.log('loading modules');
    console.log('doing something else');
    console.log('load data');
    let data = await getData() //wait to get data 
    console.log(data)

    console.log('processing data');

    console.log("new data");
}

main() // calling async function

// Example POST method implementation:
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
  
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data);
  });



