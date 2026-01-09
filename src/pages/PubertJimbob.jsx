import React from 'react';
import PageTemplate from "../components/PageTemplate";

const linkWords = {imagesamplingtool:'/imagesamplingtool', "Miyu Distribution": "https://www.miyu.fr/distribution/en/pubert-jimbob-2/"};
const links = [{word: 'here.', to: 'https://vimeo.com/1079377495?fl=pl&fe=sh', lineNumber: 2}];

const textParagraphs = ["Pubert Jimbob (2024) is quite an absurd, animated short film and my Bachelor's graduation film from KASK in Gent, Belgium.\nThe trailer can be viewed below.\nWant to watch the full film? Pubert Jimbob is currently on demand ", 
    "Pubert Jimbob, a young man, enters a strange reality after getting lured away from his home by an enigmatic figure, who throws him a lighter.\nJimbob meets Nadine Rijpfoot, a lump with a mouth, and brings her to the hospital, where he eats her surgically removed ‘bluehead’.", 
    "- Jury Award, Graduation Competition, Annecy, 2024\n- First-Crossings Jury Award, Cross-Border Film Festival Tribute to a Vision, 2024\n- Special Mention, International Competition, Riga IFF, 2024\n- Innovation Award, Student Competition, Animakom - Festival Internacional de Cine de Animación de Bilbao, 2024\n- Best Belgian Student Film, Anima, 2025\n- Special Mention, International Student Film Festival Sehsüchte, 2025\n- Jury Award, Animated Films Category, Zlín Film Festival - Internation Film Festival for Children and Youth, 2025\n- Grand Prize, International Animated Short film Competition, FICAM, 2025\n- Tough Eye Award, Turku Animated Film Festival, 2025",
    "- Official International Competition, Court Métrange, 2024\n- National Student Competition, Film Fest Gent, 2024\n- Short Films Competition, Bucheon International Animation Festival, 2024\n- International Short Film Competition, Bit Bang, 2024\n- Out of Competition, Content Festival in Suncheon, 2024\n- Student Animated Films Competition, Denver Film Festival, 2024\n- Short film selection, GIRAF, 2024\n- Nuit du court, Festival Séquence Court-Métrage, 2024\n- Short Film Competition, Mutoscope, 2025\n- Ooh la la! programme, Vilnius International Short Film Festival, 2025\n- Small Black Movie for adults, Black Movie - Festival International de Films Indépendants, 2025\n- Short Film Competition, Courts Mais Trash, 2025\n- National Student Competition, Anima, 2025\n- Midnight Movie, Internationale Kurzfilmwoche Regensburg, 2025\n- Short Film Competition, Anifilm, 2025\n- Weird Animation, Go Short, 2025\n- Focus Animation: Above the Water, International Student Film Festival Sehsüchte, 2025\n- Late Night Insanity Reels, Framed Film Festival, 2025\n- Animated Shorts Competition, Mammoth Lakes Film Festival, 2025\n- Out of Competition, FESTICO - Festival international du film d'humour et de comédie de Yaoundé, 2025\n- Oblique Competition, Barcelona International Short and Animation Festival, 2025\n- New Talents Competition, Festival of Animation Berlin, 2025\n- International Competition, Animatou, 2025\n- International Short Film Competition, Lausanne Underground Film & Music Festival, 2025\n- MINDF❤︎C Programme, Uppsala International Short Film Festival, 2025\n- Out of Competition, HahaArt Film Festival, 2025\n- EUROPEAN BOO, BOO International Film Festival, 2025\n- European Short Film Contest, Alcine - Festival de cine de Alcalá de Henares, 2025",
    "Miyu Distribution", 
    "Digital 3D & Rotoscope",
    "Blender & Ebsynth\nAdditionally, the film contains some textures that were created using my imagesamplingtool.",
    "- Director: Quirijn Dees\n \n- Pubert Jimbob voiced by: Tobias van Kaam\n \n- Nadine Rijpfoot voiced by: Simone van Laar\n \n- Receptionist and Co-Driver voiced by: Emma Verkruisen\n \n- Driver, Lighter Guy and Ominous Lüüü-man voiced by: Quirijn Dees\n \n- Music: Miro Bollen / Creax - Marine Resurrection\n \n- Animation: Quirijn Dees\n \n- Editing: Quirijn Dees\n \n- Sound Design: Quirijn Dees\n \n- Subtitles: Mels Dees\n \n- Guidance: Els Viaene, Mario Debaene, Pascal Vermeersch, Raf Schoenmaekers,\nGeert Vergauwe, Robbe Vervaeke, Patrik Berx\n \n- Special Thanks: Sofie Hoeben, My classmates\n \n- Production: KASK, School of Arts Gent\n \n- Distribution: Miyu Distribution",
"Here you can listen to me announcing the selection of Pubert Jimbob at the Annecy Festival (2024) to an employee at the Boltegnorix institute:"
];



const headers = [null, "synopsis", "awards", "selections", "distribution", "technique", "softwares", "credits", null];
const orderList = ["text", "video", "text", "image", "text", "text", "text", "image",  "text", "text", "image", "text", "image", "text", "video"]; //////// TRUE IS TEXT, FALSE IS MEDIA

export default function PubertJimbob() {


    const slideShowSizes = [];
    const subImageList = [1, 1, 1, 1];
    const gifIndices = [];
    const vidsList = [
    {alt: "trailer", src:"https://www.youtube.com/embed/R78hBBiQmdI?si=ersSu9dh-PloOlfY", link: true, width: "100%"},
    {alt: "sketch", src:"https://www.youtube.com/embed/0c94RonwH5k?si=wfdUNNMr6EfiBl4I", link: true, width: "100%"}
];
    const boldWords = [];

        return(
        <div>
            <PageTemplate
                workTitle = "PubertJimbob"
                orderList = {orderList}
                slideShowLengths = {slideShowSizes}
                subImList = {subImageList}
                gifIndices = {gifIndices}
                titleImageSize = {"70%"}
                videoList = {vidsList}
                headerList = {headers}
                textList = {textParagraphs}
                links = {links}
                linkWords = {linkWords}
                boldWords = {boldWords}
            />
        </div>
    );

}