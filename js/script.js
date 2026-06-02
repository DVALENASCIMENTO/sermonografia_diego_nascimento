// CONTADOR DE SERMÕES

const contador =
document.getElementById("contador-sermoes");

contador.textContent =
document.querySelectorAll(".sermao").length;


// PESQUISA

const pesquisa =
document.getElementById("pesquisa");

pesquisa.addEventListener("keyup", () => {

    const valor =
    pesquisa.value.toLowerCase();

    document
    .querySelectorAll(".sermao")
    .forEach(sermao => {

        const texto =
        sermao.innerText.toLowerCase();

        if(texto.includes(valor)){

            sermao.style.display = "flex";

        }else{

            sermao.style.display = "none";

        }

    });

});


// APENAS UM ÁUDIO TOCANDO

const audios =
document.querySelectorAll("audio");

audios.forEach(audio => {

    audio.addEventListener("play", () => {

        audios.forEach(outro => {

            if(outro !== audio){

                outro.pause();

            }

        });

    });

});


// ANIMAÇÃO AO ROLAR

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document
.querySelectorAll(".sermao")
.forEach(card => {

    observer.observe(card);

});


// BOTÃO TOPO

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});