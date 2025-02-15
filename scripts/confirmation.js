//Year anda las modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// Retrieve the number of reviews from localStorage
let reviewCount = localStorage.getItem("reviewCount");
if (!reviewCount) {
    reviewCount = 0;
} else {
    reviewCount = parseInt(reviewCount);
}

document.getElementById("review-form").addEventListener("submit", function() {
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount); 
});
