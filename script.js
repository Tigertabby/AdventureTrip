const door = document.querySelector(".door");

door.addEventListener("click", () => {
    door.classList.toggle("change");
    document.getElementsByTagName('h1')[0].style.color = 'yellow';
    document.getElementsByTagName('h1')[0].textContent = 'Open the yellow window, then click into it.';
    
}); 

image.addEventListener("click", () => {
    playSong();
});



