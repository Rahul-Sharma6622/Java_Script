//The Fetch API in JavaScript is a modern way to make HTTP requests (like GET, POST, PUT, DELETE) to servers and get data — usually from an API — without reloading the page.

// It’s promise-based, meaning it returns a Promise that you can handle using .then() or async/await.

// Basic Syntax

// fetch(url, options)
//   .then(response => {
//     // response is a special object
//     return response.json(); // convert JSON text to JS object
//   })
//   .then(data => {
//     console.log(data); // actual data from the server
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });

 
// API ko fetch karna ka matlab hai — aap apne JavaScript code se kisi server (API) se data mangte ho (GET request) ya bhejte ho (POST request).
// Ye kaam Fetch API se hota hai.

// 4. Async/Await style (clean code)
async function getPost() {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}

getPost();


// 1. AJAX kya hai?
// AJAX ka full form hai: Asynchronous JavaScript and XML

// Iska matlab: Web page ko reload kiye bina server se data lena ya bhejna.

// Ye technique hai, technology nahi.

// Pehle XML format me data zyada use hota tha, isliye naam me XML hai, lekin aajkal zyada tar JSON format use hota hai.

// 2. JSON kya hai?
// JSON ka full form: JavaScript Object Notation

// Ye ek data format hai jo humans ke liye readable aur machines ke liye easy hota hai.

// Example JSON:

// 3. AJAX + JSON ka matlab
// AJAX technique ka use karke server se data fetch karte ho (ya bhejte ho).

// Data ka format JSON hota hai.

// Example: Tum server se ek user ka data mangte ho, server tumhe JSON format me data bhejta hai, tum JS me use object me convert karke web page par dikha dete ho.

