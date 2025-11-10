import React from 'react';
import PageTemplate from "../components/PageTemplate";

const links = [];
const linkWords = {"'Pubert Jimbob'" : '/pubertjimbob', 'texturing tool' : '/texturingtool'};
const boldWords = ["Distribution mode 1", "Distribution mode 2", "Distribution mode 3", "Distribution mode 4", "Distribution mode 5", "Distribution mode 6"];
const vidsList = [];
const orderList = ["text", "image", "text", 
    "slideshow", "text", "image", "text", "image", "text",  "image", "text", "image", "text",  "image", "text", "image", "text", "image", "text", "image", 
    "text", "image", "text", 
    "slideshow", "text", "image", "text", "image", "text", "image", "text", "image", "text", "image", "text", "image"];
const slideShowSizes = [[16, 4, true], [12, 2, false]]; //////////// amount of elements that fold into the slideshow, amount of elements per slide, boolean for vertical (true) or horizontal (false) arrangement of imageBodies. 
const subImageList = [6, 
                    2, 2, 2, 2, 2, 2, 2, 2, 
                    1, 
                    8, 8, 6, 6, 6, 8];
const gifIdx = [];
const headers = [null, "application in 3D",  null, null, null, null, null, null, null, null, "description", "distribution modes", null, null, null, null, null, null];
const textParagraphs = [
    "The image sampler is a visual sampling tool created using Openframeworks, a creative coding toolkit for C++.",
    "The imagesamplingtool generates textures with seamless edges, so that their output can easily be used as a repeating texture within a 3D-context.\nFor my bachelor’s graduation film 'Pubert Jimbob' (2024), I made use of a variety of textures that I created with the imagesamplingtool. Here are some examples of is applications in a 3D-context:",
        "The car in 'Pubert Jimbob' is textured using the imagesamplingtool.\nIts normal map was generated in photoshop using the albedo map.", 
        "→",
        "Nadine Rijpfoot is textured using the imagesamplingtool.\nThe additional normal-, roughness- and bump maps were created in photoshop, using the albedo map as a base.",
        "→",
        "The 'pilseter' or 'bluehead' is textured using the imagesamplingtool.\nNormal- and height-maps were created, from the generated albedo map, in photoshop.",
        "→",
        "For the wallpaper, as well as the pile of clothes in Pubert Jimbob's room, the imagesamplingtool was used.",
        "→",
    "The imagesamplingtool uses one, or multiple input images to sample. It’s brightness-, hue- or saturation-values can be used to key out certain elements.\nBlack area’s in the image below fall under the threshold to become transparent, whereas the white area’s are isolated to then be sampled.",
    "Using a sampled selection from the source image, the tool's digital canvas can be filled in a variety of ways. These are so-called 'distribution modes':",
        "Distribution mode 1\nThe first distribution mode distributes its selection, or 'segments', randomly over the canvas,\napplying random rotations, random brightness-values and random sizes.",
        "Distribution mode 2\nThe second distribution-mode rotates the selections around the centre of the canvas.\nThe distance from this centre drives the size of the selections.",
        "Distribution mode 3\nThis mode distributes the selections along a line.The direction can be either horizontal or vertical.\nAdditionally, the width of the line can be altered.",
        "Distribution mode 4\nThe fourth distribution mode allows the user to draw a shape in a ‘polygonal lasso’-fashion.\nOnly this shape will then be randomly filled with the selection. The specific mode became the basis for my other texturing tool.",
        "Distribution mode 5\nThe fifth distribution-mode employs noise to position the selections.\nParameters like the scale of the noise, as well as the density of the segments can be adjusted accordingly.",
        "Distribution mode 6\nThe final distribution mode places the segments along a line, similarly to distribution mode 3.\nIn this case, however, a noise influences the perpendicular displacement of the segments, therewith creating repeated, meandering strings of segments."
];





export default function ImageSamplingTool() {

    return(
        <div>
            <PageTemplate
            workTitle = "ImageSamplingTool"
            orderList = {orderList}
            slideShowLengths = {slideShowSizes}
            subImList = {subImageList}
            gifIndices = {gifIdx}
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