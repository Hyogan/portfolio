/*Block title variables !!!!!!!!!!!!!!!!!!!*/
var characterIndex = 0
var chindex  = 0
const title = "Here are my 3d Artworks";
const name = "NELSON TIAGHO";
const nameSelection = document.querySelector(".my-name");
const titleSelection = document.querySelector(".container3d");


updateText();
updateText2();
function updateText() {
    characterIndex++;
    titleSelection.innerHTML = `
    <h1> ${title.slice(0,characterIndex)}</h1>`;
    if(characterIndex == title.length ) {
        characterIndex = 0
    }
    setTimeout(updateText, 200)
}
function updateText2() {
    chindex++ ;
    nameSelection.textContent = `${name.slice(0,chindex)}`
    if(chindex == name.length) {
        chindex =0;
    }
    setTimeout(updateText2, 100);
}



/* 3d artwork variables !!*/
const artworkImg = document.querySelector(".artwork-pic");
const artworkTitle = document.querySelector(".artwork-title");
const artworkDescription = document.querySelector(".artwork-description");
let idx = 0;


const artworkArray = [
    {
        title: "The Planet",
        description:"A planet from a fantastic world made with the blender software for a project named : 'Defend Earth'",
        picUrl:"picsrc/3D/Planet.png"
    },

    {
        title: "The 3D House",
        description:"A small self-project, made with the blender software ! Actually, it's just the modelisation, the next step on it will be the texturing and the materials !",
        picUrl:"picsrc/3D/house2.png"
    },    
]
change3dArtwork()
function change3dArtwork() {
    const {title,description,picUrl} = artworkArray[idx];
    artworkImg.src = picUrl;
    artworkTitle.textContent = title;
    artworkDescription.textContent = description;
    idx++;
    if(idx == artworkArray.length)
    {
        idx = 0;
    }
    setTimeout(change3dArtwork,2000);
}
/*
const webArtwork =[
    {
        title: "",
        description:"QRCodeDesign_Html_Css",
        picUrl : "picsrc/Prog/QRCodeDesign_Html_Css.PNG",
        liveUrl : "",
    },

    {
        title: "",
        description:"Product_preview_card_component",
        picUrl : "picsrc/Prog/Product_preview_card_component.PNG",
        liveUrl : "",
    },

    {
        title: "",
        description:"picsrc/Prog/order_summary_component",
        picUrl : "picsrc/Prog/order_summary_component.PNG",
        liveUrl : "",
    },

    {
        title: "",
        description:"nft_preview_card_component",
        picUrl : "picsrc/Prog/nft_preview_card_component.PNG",
        liveUrl : "",
    },

    {
        title: "",
        description:"interactive_rating-component",
        picUrl : "picsrc/Prog/interactive_rating-component.PNG",
        liveUrl : "",
    },

    {
        title: "",
        description:"huddle-landing-page-with-single-introductory-section",
        picUrl : "picsrc/Prog/huddle-landing-page-with-single-introductory-section-master.PNG",
        liveUrl : "",
    },

    {
        title: "",
        description:"base-apparel-coming-soon-master",
        picUrl : "picsrc/Prog/base-apparel-coming-soon-master.PNG",
    }
]*/


const imageContainerEl = document.querySelector(".webArtworks");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 2500);
}

updateGallery();