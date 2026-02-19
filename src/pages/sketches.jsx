import React from 'react';
import PageTemplate from "../components/PageTemplate";

const links = [];
const linkWords = {"Symbionts (2025)" : '/symbionts'};
const boldWords = [];
const vidsList = [
    {alt: "alienDoc", src:"/images/Sketches/XBJ_AlienNatureDoc1.mp4", link: false, width: "100%"},
    {alt: "dancingCharacter", src:"/images/Sketches/DancingHairyCharacterV1_LR_18-02-26.mp4", link: false, width: "100%"}
];
const orderList = ["text",
    "text",
    "video",
    "text",
    "video"
];
const slideShowSizes = []; //////////// amount of elements that fold into the slideshow, amount of elements per slide, boolean for vertical (true) or horizontal (false) arrangement of imageBodies. 
const subImageList = [
];
const gifIndices = []; //////////////// IF AN IMAGE IS A GIF, FILL IN THE IMAGE_(INDEX1)_(INDEX2) PER GIF.
const headers = [null, "Alien Documentary Sketch", "The Hairier Dancer"
];
const textParagraphs = [
    "This page displays a collection of visual sketches and experiments.\nThey are not part of my larger projects, or were scrapped in the process.",
    "This video is a sketch of what a voice-overed timelapse segment in an alien documentary might look and sound like. I created it as an early stage test for an alternative direction for my Master's graduation film Symbionts (2025). The 3D animation is created using Houdini, rendered in Karma, the voice sampling was done using Supercollider.", 
    "A hairy guy danced... in a mocap suite, and it was sweaty as it was high summer. After a much-needed shower, said hairy guy applied a hair simulation to the mocap recording in Houdini. Thus creating another guy even hairier than himself. The hairy guy made viewport renders of his hairier counterpart, and edited them over his own music. It was fun."
];

export default function Sketches() {

    return(
        <div>
            <PageTemplate
            workTitle = "Sketches"
            orderList = {orderList}
            slideShowLengths = {slideShowSizes}
            subImList = {subImageList}
            gifIndices = {gifIndices}
            titleImageSize = {null}
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