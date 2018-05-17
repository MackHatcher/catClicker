document.addEventListener('DOMContentLoaded', function() {
    let counter = document.getElementById("catCounter");
    
    let kittyKat = document.getElementById('kitty');
    kittyKat.addEventListener('click', function () {
        counter.innerHTML++;
})
});
