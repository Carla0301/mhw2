//mostra una seconda immagine di ciascuna localita' quando si passa sopra con il mouse
//torna l'immagine di prima una volta che ci si sposta con il mouse

const mappaViaggiOver={
    venezia: "https://a.cdn-hotels.com/gdcs/production126/d943/56a06cca-b264-46e6-86eb-d518efd2198f.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    roma: "https://tourismmedia.italia.it/is/image/mitur/1600X1000_8_cose_imperdibili_natale_di_roma_hero?wid=1080&hei=660&fit=constrain,1&fmt=webp",
    palermo:"https://a.cdn-hotels.com/gdcs/production63/d1896/79f77da4-aa4b-4915-a74d-6c8f9b652694.jpg",
    trento:"https://scorcidimondo.it/wp-content/uploads/2021/10/PSX_20211026_175601-scaled.jpg"
}

const mappaViaggiOut={
    venezia: "https://experience.europlan.it/wp-content/uploads/2019/04/venezia-classica1920x1080.jpg",
    roma: "https://media.istockphoto.com/id/539115110/it/foto/colosseo-di-roma-e-sole-mattutino-italia.jpg?s=612x612&w=0&k=20&c=ngbBMGVEkJxHsnt4SN7ZuncEnRenq2tFI8V0-zCg4pw=",
    palermo:"https://civitavecchia.portmobility.it/sites/default/files/palermo_-_la_fontana_pretoria.jpg",
    trento:"https://www.hotelmontana.it/wp-content/uploads/2019/04/Trento.jpg"
}



function onMouseoverViaggio(event){

    const image=event.currentTarget;
    image.src=mappaViaggiOver[image.parentNode.dataset.citta];
    image.removeEventListener("mouseover", onMouseoverViaggio);
    image.addEventListener("mouseout", onMouseoutViaggio);
}

function onMouseoutViaggio(event){

    const image=event.currentTarget;
    image.src=mappaViaggiOut[image.parentNode.dataset.citta];
    image.removeEventListener("mouseout", onMouseoutViaggio);
    image.addEventListener("mouseover", onMouseoverViaggio);

}

const img_venezia=document.querySelector("#img_venezia");
img_venezia.addEventListener("mouseover", onMouseoverViaggio);

const img_roma=document.querySelector("#img_roma");
img_roma.addEventListener("mouseover", onMouseoverViaggio);

const img_palermo=document.querySelector("#img_palermo");
img_palermo.addEventListener("mouseover", onMouseoverViaggio);

const img_trento=document.querySelector("#img_trento");
img_trento.addEventListener("mouseover", onMouseoverViaggio);




//menu a tendina su Servizi a bordo e Contatti

function menuTendina(event){

    const elemento=event.currentTarget;


    const tendina=elemento.parentNode.querySelector(".hidden");
    tendina.classList.remove("hidden");
    tendina.classList.add("menu_tendina");
    

    elemento.removeEventListener("mouseover", menuTendina);
    elemento.addEventListener("mouseout", rimuoviTendina);
}

function rimuoviTendina(event){

    const elemento=event.currentTarget;
    const tendina=elemento.parentNode.querySelector(".menu_tendina");
    
    tendina.classList.remove("menu_tendina");
    tendina.classList.add("hidden");

    elemento.removeEventListener("mouseout", rimuoviTendina);
    elemento.addEventListener("mouseover", menuTendina);
}

const servizi=document.querySelector("#menu_tendina_servizi a");
servizi.addEventListener("mouseover", menuTendina);

const contatti=document.querySelector("#contatti a");
contatti.addEventListener("mouseover", menuTendina);



//"clicca qui per saperne di piu'" nei riquadri dei viaggi
//uso i data-* per salvare info come il num di abitanti, turisti all'anno e i metri quadrati
//che poi mostro una volta che si clicca su "clicca qui per maggiori info"


function onClickScopriDiPiu(event){
    
    const elemento=event.currentTarget;
    const info=document.createElement("p");

    const blocco_viaggio=elemento.parentNode;

    info.textContent=blocco_viaggio.dataset.abitanti + blocco_viaggio.dataset.turismo + blocco_viaggio.dataset.grandezza;
    

    
    elemento.classList.remove("bottoni_viaggi")
    elemento.classList.add("hidden");

    
    blocco_viaggio.appendChild(info);
}


const bottone_venezia=document.querySelector("#bottone_venezia");
bottone_venezia.addEventListener("click", onClickScopriDiPiu);

const bottone_palermo=document.querySelector("#bottone_palermo");
bottone_palermo.addEventListener("click", onClickScopriDiPiu);

const bottone_roma=document.querySelector("#bottone_roma");
bottone_roma.addEventListener("click", onClickScopriDiPiu);

const bottone_trento=document.querySelector("#bottone_trento");
bottone_trento.addEventListener("click", onClickScopriDiPiu);

