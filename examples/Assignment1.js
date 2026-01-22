// Define variables
let userRole = "admin";      // "admin", "editor", "guest"
let isAuthenticated = true; // true or false
let userAge = 22;           // number

// Logic
if (!isAuthenticated) {
    console.log("Please log in");
} else if (isAuthenticated && userRole === "admin") {
    console.log("Welcome to the Dashboard.");
} else if (isAuthenticated && userRole !== "admin") {
    console.log("Access Denied");
}
