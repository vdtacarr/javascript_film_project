function Storage(){

}
Storage.prototype.addFilmToStoroge = function(newFilm){
    let films ;
    if(localStorage.getItem("films") === null){
        films = [];

    }else{
        films = JSON.parse(localStorage.getItem("films")); 
    }
}