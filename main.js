document.addEventListener('DOMContentLoaded', function() {
    let counter = document.getElementById("catCounter");
    let counter2 = document.getElementById('catCounter2');
    let catName = document.getElementById('catName');
    let catName2 = document.getElementById('catName2');

    catName.textContent = "Mittens:";
    catName2.textContent = "Boots:";
    
    let kittyKat = document.getElementById('kitty');
    kittyKat.addEventListener('click', function () {
        counter.innerHTML++;
})
    let kittyKat2 = document.getElementById('kitty2');
    kittyKat2.addEventListener('click', function() {
        counter2.innerHTML++;
    })
});
