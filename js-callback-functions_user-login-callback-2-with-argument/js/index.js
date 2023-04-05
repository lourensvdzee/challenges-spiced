console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

/* 1. Write a function with the "function" keyword named "showWelcomeMessage"
   Call "handleUserLogin" and pass your callback function as the first argument.
   (You should see the log from your callback message) */

function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName} You are logged in now.`);
}

// handleUserLogin(showWelcomeMessage);

/* 2. Call "handleUserLogin" again but this time write the callback function as an anonymous function **inside** the function call (i.e. between the round brackets).
   (You should see the log from your callback message) */

//Arrow
handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are logged in now.`);
});

//Regular
handleUserLogin(function (userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
});


