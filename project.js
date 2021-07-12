const form = document.getElementById("film-form");
const titleElemnt = document.querySelector("#title");
const director = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//UI objesini başlat
const ui = new UI();
const storage = new Storage();
//Tüm eventleri yükleme

eventListeners();
function eventListeners(){
form.addEventListener("submit",addFilm);
}

function addFilm(e){
const title = titleElemnt.value;
const director = director.value;
const url =  url.value;

if(title === "" || director ==="" || url === ""){
ui.displayMessages("tüm alanları doldurun","danger");
}
else{
    const newFilm = new Film(title,director,url);
    
    
    ui.addFilmToUI(newFilm);
    storage.addFilmToStorage(newFilm);
    ui.displayMessages("film başarıyla eklendi.","success"); 

    
}  
   ui.clearInputs(title,director,url);




    e.preventDefault();
}
