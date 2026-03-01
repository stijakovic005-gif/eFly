  
const danas = new Date().toISOString().split("T")[0];

document.getElementById("datumPolaska").setAttribute("min", danas);
document.getElementById("datumPovratka").setAttribute("min", danas);
    
    var navigacija=[ 
        "Avio karte",
        "Poslednji trenutak",
        "Najbolje ponude",
        "Kontakt",
        "Autor",
        "Zip",
        
    ];

     let navMeni="<ul>"
    for(let i=0;i<navigacija.length;i++){

    if(navigacija[i] === "Zip"){
        navMeni += `<li><a href="eFly.zip" download>Zip</a></li>`;
    } else {
        navMeni += `<li><a href="#"> ${navigacija[i]}</a></li>`;
    }

}
    navMeni += "</ul>";
    document.getElementById("meni").innerHTML= navMeni;

document.addEventListener("click", function(e){

    if(e.target.tagName === "A"){

        const tekst = e.target.textContent.trim();

          if(tekst === "Poslednji trenutak"){
            e.preventDefault();
            scrollBtn("lastMinute");
        }

        if(tekst === "Avio karte"){
            e.preventDefault();
            scrollBtn("firstTitle");
        }

        if(tekst === "Najbolje ponude"){
            e.preventDefault();
            scrollBtn("najboljePonudeNaslov");
        }

        if(tekst === "Kontakt"){
            e.preventDefault();
            scrollBtn("kontaktNaslov");
        }
        if(tekst === "Autor"){
            e.preventDefault();
            scrollBtn("autorNaslov");
        }
    }

});
   
  

   function scrollBtn(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior : "smooth" });
}

$("#prijavaBtn").click(function () { scrollBtn("kontaktNaslov"); });

const gradoviPolaska = [
    "Polazak",
    "Beograd,Srbija",
    "Niš,Srbija",
];

let polazak = "<label>Od</label><select id='selPol'>";
for(let i=0;i<gradoviPolaska.length;i++){
    polazak +="<option>"+gradoviPolaska[i]+"</option>";
}
polazak += "</select>";
document.getElementById("polazakAer").innerHTML = polazak;



const gradoviDolaska = [
    "Dolazak",
    "Barselona,Španija",
    "Nikozija,Kipar",
    "Lisabon,Portugal",
    "Ankara,Turska",
    "Valeta,Malta",
    "Rim,Italija",
    "Atina,Grčka",
    "Dubai,UAE",
    
];

document.getElementById("destinacijaAer");
let dolazak = " <label>Do</label><select id='selDest'>";
for(let i=0;i<gradoviDolaska.length;i++){
    dolazak +="<option>"+gradoviDolaska[i]+"</option>";
}
dolazak += "</select>";
document.getElementById("destinacijaAer").innerHTML = dolazak;




document.getElementById("formaPretraga").addEventListener("submit", pretraga);
document.getElementById("datumPolaska").addEventListener("change", function() {
    document.getElementById("datumPovratka").setAttribute("min", this.value);
});


const radioPovratno = document.getElementById("povratno");
const radioJedanSmer = document.getElementById("jedanSmer");
const povratakField = document.getElementById("povratakField");
const datumPovratka = document.getElementById("datumPovratka");
const poruka = document.getElementById("poruka");

radioJedanSmer.addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("formaPretraga").reset();
        this.checked = true; 
        povratakField.style.display = "none";
        poruka.textContent = "";
        poruka.className = "";
    }
});


radioPovratno.addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("formaPretraga").reset(); 
        this.checked = true;
        povratakField.style.display = "flex";
        poruka.textContent = "";
        poruka.className = "";
    }
});




function pretraga(event) {
    event.preventDefault();

    const selectOd = document.getElementById("selPol");
    const selectDo = document.getElementById("selDest");
    const datumPolaska = document.getElementById("datumPolaska");
    const datumPovratka = document.getElementById("datumPovratka");
    const tipPuta = document.querySelector('input[name="tip"]:checked');
    const brojPutnika = document.querySelector("#ddlPutnici select");
    const poruka = document.getElementById("poruka");

    const vrednostOd = selectOd.value;
    const vrednostDo = selectDo.value;

    poruka.className = "";
    let tekst = "";

   
    if (vrednostOd === "Polazak") {
        tekst += "Izaberite grad polaska. ";
    }

  
    if (vrednostDo === "Dolazak") {
        tekst += "Izaberite grad dolaska. ";
    }

    if (datumPolaska.value === "") {
        tekst += "Izaberite datum polaska. ";
    }

    
    if (tipPuta.id === "povratno") {
        if (datumPovratka.value === "") {
            tekst += "Izaberite datum povratka. ";
        } 
        else if (datumPovratka.value < datumPolaska.value) {
            tekst += "Datum povratka ne može biti pre datuma polaska. ";
        }
    }

    
    if (brojPutnika.value === "Izaberi") {
        tekst += "Izaberite broj putnika. ";
    }

 
    if (tekst !== "") {
        poruka.textContent = tekst;
        poruka.classList.add("greska");
        return;
    }

const tipTekst = tipPuta.id === "povratno" ? "Povratno" : "Jedan smer";

let rezultat = `
    <strong>Tip putovanja:</strong> ${tipTekst} <br>
    <strong>Od:</strong> ${vrednostOd} <br>
    <strong>Do:</strong> ${vrednostDo} <br>
    <strong>Datum polaska:</strong> ${datumPolaska.value} <br>
`;

if (tipPuta.id === "povratno") {
    rezultat += `<strong>Datum povratka:</strong> ${datumPovratka.value} <br>`;
}

rezultat += `<strong>Broj putnika:</strong> ${brojPutnika.value}`;

poruka.innerHTML = rezultat;
poruka.classList.add("uspeh");
}



let putnici="<label>Putnici</label><select><option>Izaberi</option>";
    for(let i=1;i<5;i++)
    {   if(i<=3){
        putnici+="<option>"+i+"</option>"}
        else{
             putnici+="<option>"+i+"+"+"</option>"
        }
    }
    putnici+="</select>";


    document.getElementById("ddlPutnici").innerHTML=putnici;
function togglePassword() {
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}

const spain = ["Španija", 209, "assets/img/spain.jpg", true];
const cyprus = ["Kipar", 209, "assets/img/cyprus.jpg"];
const portugal = ["Portugal", 309, "assets/img/portugal.jpg"];
const turkey = ["Turska", 219, "assets/img/turkey.jpg"];
const malta = ["Malta", 179, "assets/img/malta.jpg"];


const destinations = [
    spain,
    cyprus,
    portugal,
    turkey,
    malta,
   
];

const container = document.getElementById("cardsContainer");

destinations.forEach(dest => {

    const name = dest[0];
    const price = dest[1];
    const image = dest[2];
    const large = dest[3];

    const card = document.createElement("div");
    card.classList.add("card");

    if (large) {
        card.classList.add("large");
    }

    card.innerHTML = `
        <div class="image-wrapper">
            <span class="badge">
                <i class="fa-regular fa-clock"></i> LAST MINUTE
            </span>
            <img src="${image}" alt="${name}">
            ${large ? `
                <div class="overlay-text">
                    <h3>${name}</h3>
                    <p>Cena od <strong>${price} &euro;</strong></p>
                </div>
            ` : ""}
        </div>

        ${!large ? `
            <h3>${name}</h3>
            <p>Cena od <strong>${price} &euro;</strong></p>
        ` : ""}
    `;

    container.appendChild(card);
});




const sliderImages = [
    "assets/img/uae.jpg",
    "assets/img/italy.jpg",
    "assets/img/greece1.jpg"
];

const sliderCountries = [
    "UJEDINJENI ARAPSKI EMIRATI",
    "ITALIJA",
    "GRČKA"
];

const sliderCities = [
    "Dubai",
    "Rim",
    "Atina"
];

const sliderFrom = [
    "Iz Beograda (BEG)",
    "Iz Niša (NI)",
    "Iz Beograda (BEG)"
];

const sliderPrices = [
    "519 EUR",
    "219 EUR",
    "289 EUR"
];


let currentSlide = 0;

const slider = document.getElementById("slider");
const countryEl = document.getElementById("sliderCountry");
const cityEl = document.getElementById("sliderCity");
const fromEl = document.getElementById("sliderFrom");
const priceEl = document.getElementById("sliderPrice");

function changeSlide() {

    slider.style.background =
        `url('${sliderImages[currentSlide]}') no-repeat center center/cover`;

    countryEl.textContent = sliderCountries[currentSlide];
    cityEl.textContent = sliderCities[currentSlide];
    fromEl.textContent = sliderFrom[currentSlide];
    priceEl.innerHTML = sliderPrices[currentSlide];

    currentSlide++;

    if (currentSlide >= sliderImages.length) {
        currentSlide = 0;
    }
}


changeSlide();


setInterval(changeSlide, 4000);
document.getElementById("kontaktForma").addEventListener("submit", function(e){
    e.preventDefault();

    const ime = document.getElementById("ime").value.trim();
    const prezime = document.getElementById("prezime").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const poruka = document.getElementById("kontaktPoruka");

  
    const nameRegex = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    let tekst = "";

    if(!nameRegex.test(ime)){
        tekst += "Ime mora početi velikim slovom i imati minimum 3 slova.<br>";
    }

    if(!nameRegex.test(prezime)){
        tekst += "Prezime mora početi velikim slovom i imati minimum 3 slova.<br>";
    }

    if(!emailRegex.test(email)){
        tekst += "Unesite ispravan email.<br>";
    }

    if(!passRegex.test(password)){
        tekst += "Lozinka mora imati minimum 6 karaktera, jedno veliko slovo i jedan broj.<br>";
    }

    if(tekst !== ""){
        poruka.innerHTML = tekst;
        poruka.className = "greska";
        return;
    }

    poruka.innerHTML = "Uspešno ste prijavljeni!";
    poruka.className = "uspeh";
});
$("#toggleAutor").click(function() {
    $(".dugacak-tekst").slideToggle(300);

    if($(this).text() === "Prikaži više") {
        $(this).text("Prikaži manje");
    } else {
        $(this).text("Prikaži više");
    }
});
const hamburger = document.getElementById("hamburger");
const meni = document.getElementById("meni");

hamburger.addEventListener("click", function() {
    meni.classList.toggle("active");
});




const cardsContainer = document.getElementById("cardsContainer");
const prevBtn = document.getElementById("prevCard");
const nextBtn = document.getElementById("nextCard");

const scrollAmount = 260; 

prevBtn.addEventListener("click", () => {
    cardsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
    cardsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});





