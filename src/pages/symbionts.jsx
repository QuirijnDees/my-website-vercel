import React from 'react';
import PageTemplate from "../components/PageTemplate";

const linkWords = {"texturing tool":'/texturingtool', "Bonobo Studio": "https://bonobostudio.hr/en/distribution/symbionts", "'Shorts II, 2025'-publication by Swiss Films" : "https://www.swissfilms.ch/en/movie/symbionts/7dfba7691a7a4251a66946f4430c3f8f"};
const links = [{word: 'here.', to: '/texturingtool', lineNumber: 3}, null, null, null, null, null, null, {word: 'here.', to: 'https://wiki.animation-luzern.ch/2025_Symbionts', lineNumber:1}];
const textParagraphs = ["Symbionts (2025) is an experimental, animated short film,\nit is my Master's graduation film at Lucerne School of Design, Film and Art.\n Its visual language is achieved by processing 3D-renders from Houdini with a custom-made texturing tool, created in Openframeworks.\nIf you want to know more about this tool specifically, there is a page dedicated to it ", 
                        "One form liquefies into a glistening puddle, another reproduces in a vibrant entanglement, while a third convulses under the invasive force of a parasitic entity. Symbionts traces an organic cycle of interaction within an unfamiliar ecosystem. It reveals the radiant elegance and the unrelenting violence inherent in the symbiotic relationships between diverse and peculiar life forms.\n\nThe film employs a distinctive visual language by merging digital 3D animation with a custom-developed texturing tool. This approach introduces a sense of abstraction while maintaining a tactile, almost recognizable reality, inviting viewers to immerse themselves in a world that is simultaneously alien and intimately biological.",
                        "- Swiss Competition, Internationale Kurzfilmtage Winterthur, 2025",
                        "Digital 3D & Creative coding",
                        "Houdini, Openframeworks, Nuke, Davinci Resolve",
                        "Bonobo Studio",
                        "-	Directed by: Quirijn Dees\n \n-	Animation: Quirijn Dees\n \n-	Editing: Quirijn Dees\n \n-	Compositing: Frederic Berger\n \n-	Title and Credit Design: Alexandra Siebert\n \n-	Music: Miro Bollen\n \n-	Foleys: Céline Bernard\n \n-	Sound Design: Miro Bollen, Quirijn Dees\n \n-	Sound mix: Jeroen Visser\n \n-	Project Mentors: Tim Markgraf, Simon Ott, Fabian Schäublin, Jeroen Visser, Marvin Sprengel, Irina Rubina\n \n-	Production Support: Jean First, Thomas Gassman\n \n-	Thesis Mentor: Elke Rentemeister\n \n-	Artistic Assistance: Elena Rast, Katharina Knust\n \n-	Social Media: Eugénie Bouquet\n \n-	Executive Producer: Gerd Gockell\n \n-	Promotion: Chantal Molleur\n \n-	Produktion/Production/Production: Lucerne School of Design, Film and Art / MA Animation, Tina Ohnmacht\n \n-	Special thanks: My classmates, Sofie Hoeben",
                        "Symbionts is featured in the 'Shorts II, 2025'-publication by Swiss Films.\nMore information on Symbionts can be found "
                    ];



const headers = [null, "synopsis", "selection", "technique", "softwares", "distribution", "credits", ""];
const basePath = "Symbionts/";
const stillAm = 4;
const orderList = ["text", "video", "text", "text", "image", "text", "text", "text", "image", "text","image", "text"]

export default function Symbionts() {

    const slideShowSizes = [];
    const subImageList = [1, 1, 3];
    const gifIndices = [];
    const vidsList = [ 
        {alt: "excerpt", src:"https://player.vimeo.com/video/1113872012?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", link:true, width: "100%"}
    ];
    const boldWords = [];

    return(
        <div>
            <PageTemplate
            workTitle = "Symbionts"
            orderList = {orderList}
            slideShowLengths = {slideShowSizes}
            subImList = {subImageList}
            gifIndices = {gifIndices}
            titleImageSize = {"50%"}
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