// Obtener el año actual y mostrarlo en el pie de página
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Obtener la fecha de la última modificación y mostrarla
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

