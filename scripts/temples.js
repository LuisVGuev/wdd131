//Year anda las modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;


document.getElementById("menu").addEventListener("click", function() {
 let nav = document.querySelector("nav ul");
 nav.classList.toggle("active"); 
});

