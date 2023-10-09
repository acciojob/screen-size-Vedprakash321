//your JS code here. If required.
// Function to update width and height values and display them
 const sizeInfo = document.getElementById("sizeInfo");
const widthSpan = document.getElementById("width");
const heightSpan = document.getElementById("height");

// Function to update window size in the h1 tag
function updateWindowSize() {
	widthSpan.textContent = window.innerWidth;
	heightSpan.textContent = window.innerHeight;
}

// Call the function to initialize the size
updateWindowSize();

// Add event listener for window resize
window.addEventListener("resize", updateWindowSize);