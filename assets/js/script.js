const videoSugerencia = (() => {
    function privada (url, id){
        id.setAttribute("src", url)
    }

    return{
        publica(url, id){
            privada(url, id)
        }
    }
})()

class Multimedia {
    constructor(url) {
        let _url = url;

        this.setUrl = (value) => (_url = value);
        this.getUrl = () => _url;
    }

    get url() {
        return this.getUrl();
    }

    set url(value) {
        this.setUrl(value);
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url)
        this._id = id
    }

    playMultimedia(){
        videoSugerencia.publica(this.getUrl(), this._id)
    }
    setInicio(tiempo){
        videoSugerencia.publica(`${this.getUrl()}?start=${tiempo}`, this._id)
    }
}

const musica = document.getElementById("musica")
const peliculas = document.getElementById("peliculas")
const series = document.getElementById("series")

const videoMusica = new Reproductor("https://www.youtube.com/embed/imSefM4GPpE", musica)
videoMusica.setInicio(20)

const videoPelicula = new Reproductor("https://www.youtube.com/embed/LO5_nx8ydGA", peliculas)
videoPelicula.playMultimedia()

const videoSerie = new Reproductor("https://www.youtube.com/embed/JUTj9j1qklM", series)
videoSerie.playMultimedia() 