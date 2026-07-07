// Darkmode
const darkBtn = document.getElementById("darkMode");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

//Search Resep
const search = document.getElementById("searchInput");
search.addEventListener("keyup", function () {
    let keyword = search.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();
        if(title.includes(keyword)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
    });
});
// Tombol Lihat Resep

const buttons = document.querySelectorAll(".card button");

buttons.forEach(btn=>{

btn.addEventListener("click",function(){

const nama = this.parentElement.querySelector("h3").textContent;

alert("Kamu memilih resep " + nama);

});

});