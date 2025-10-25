import React from 'react';
import PageTemplate from "../components/PageTemplate";

const links = [];
const linkWords = {"'Symbionts'" : '/symbionts'};
const boldWords = [];
const vidsList = [
    {alt: "wipe1", src:"/images/TexturingTool/SymbiontsWipe0.mp4", link: false, width: "95%"},
    {alt: "wipe2", src:"/images/TexturingTool/SymbiontsWipe1.mp4", link: false, width: "95%"},
    {alt: "wipe3", src:"/images/TexturingTool/SymbiontsWipe2.mp4", link: false, width: "95%"},
    {alt: "wipe4", src:"/images/TexturingTool/SymbiontsWipe3.mp4", link: false, width: "95%"},
    {alt: "wipe5", src:"/images/TexturingTool/SymbiontsWipe4.mp4", link: false, width: "95%"},
    {alt: "wipe6", src:"/images/TexturingTool/SymbiontsWipe5.mp4", link: false, width: "95%"},
    {alt: "wipe7", src:"/images/TexturingTool/SymbiontsWipe6.mp4", link: false, width: "95%"}
];
const orderList = ["text", "text",
    "slideshow", "text", "image", "text", "image", "text", "image", "text", "image", "text", "image", "text", "image",
    "text",
    "slideshow", "video", "video", "video", "video", "video", "video", "video", 
    "text",
        "slideshow", "text", "image",  "text", "image",  "text", "image",  "text", "image",  "text", "image",  "text", "image",  "text", "image",  "text", "image",  "text", "image",  "text", "image",  "text", "image", "text", "image"
];
const slideShowSizes = [[12, 2, false], [7, 1, false], [24, 2, false]]; //////////// amount of elements that fold into the slideshow, amount of elements per slide, boolean for vertical (true) or horizontal (false) arrangement of imageBodies. 
const subImageList = [
    1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
];
const gifIndices = [[7, 2]]; //////////////// IF AN IMAGE IS A GIF, FILL IN THE IMAGE_(INDEX1)_(INDEX2) PER GIF.
const headers = [null, "still examples", null, null, null, null, null, null,  "examples with 3D-input", "explanation"];
const textParagraphs = [
    "\nThe texturing tool is used to retexture and abstract 3D-renders.\nIt was programmed using the C++ creative coding toolkit: Openframeworks.\nThe tool was used to build the visual language for my Master's graduation film 'Symbionts' (2025).",
        " ",
        "These are a variety of textures applied to the same 3D model using the texturing tool.\nThe 3D-input comes from my film 'Symbionts'.", "These are a variety of textures applied to the same 3D model using the texturing tool.\nThe 3D-input comes from my film 'Symbionts'.", "These are a variety of textures applied to the same 3D model using the texturing tool.\nThe 3D-input comes from my film 'Symbionts'.", "These are a variety of textures applied to the same 3D model using the texturing tool.\nThe 3D-input comes from my film 'Symbionts'.", "These are a variety of textures applied to the same 3D model using the texturing tool.\nThe 3D-input comes from my film 'Symbionts'.", "These are a variety of textures applied to the same 3D model using the texturing tool.\nThe 3D-input comes from my film 'Symbionts'.",
        "Here are more examples from 'Symbionts' that present both the 3D-input (the clay render) from Houdini, as well as the results from the texturing tool.\nThe textured results were subtly composited using Nuke.", 
    "\nThe following slideshow provides a step-by-step explanation\nof how the texturing tool uses a variety of render passes from a rendered 3D-input,\nas well as a PNG-sequence to create its textures.",
        "This example makes use of the 3D-render on the left, the PNG-sequence on the right accounts for the basis of the texture.",
        "The cryptomatte of the 3D-input is used to create an outline that will be filled with repetitions of the PNG-sequence or the so-called 'segment-input'.",
        "The outline is filled with repeated frames, or ‘segments’, from the PNG-sequence. The brightness value from a specific render-pass, the ‘frame-map’ (on the left), determines what frame from the PNG-sequence is used for each segment.\nDarker values result in lower frame-numbers, whereas the brighter values will be assigned frame-numbers towards the end of the PNG-sequence.",
        "As for now, the segments do not display any depth. In order to rotate the segments accordingly on the X- and Y-axis, the colour values from another render-pass are used. The ‘normdir-map’ translates the angles of the surface normals of the 3D-object, from the perspective of the camera, into the necessary colour values. A surface that tilts upwards from the perspective of the camera will be more green, a surface that tilts to the right from the camera perspective will be more red.",
        "Additionally, both rotations on the X- and Y-axis can be offset.\nOn the left, the segments have been rotated an additional 90 degrees on the Y-axis.\nOn the right, this has been done on the X-axis.",
        "Another parameter that can be changed is the rotational range on the X- and Y-axes. Where a rotational range of 180 degrees results in a realistic recreation of the original curvature of the 3D surfaces, other rotational ranges might create stranger representations of 3-dimensional space. On the left there is no X- and Y-rotation, whereas the rotational range on the left is 360 degrees.",
        "To add a bit of randomness to the (currently very even) distribution of the segments, a displacement noise is added on both the X- and Y-position of each segment. The ‘gridnoise-map’ can be used to drive the direction and amount of displacement of the segments.",
        "The segments can also be rotated along the Z-axis. For this, another render pass can be used, the ‘zrot-map’.",
        "However, the z-rotation and gridnoise-displacement do not need to be applied using their assigned passes. Both variables can also be driven by the onscreen position of the segments. On the left the onscreen position of the segments drives a noise that determines their rotation on the Z-axis. On the right, it determines their displacement.",
        "A smaller segment-size, combined with a higher density can produce finer textures, at the cost of performance.",
        "Several blendmodes can be used: 'normal', 'screen' and 'add'. The blendmode 'add' is applied to the texture on the left, 'screen' to the right.", 
        "In the case of a sequence of 3D-renders (a video), the frame-number of all segments can be offset with each rendered frame, resulting in a constantly-changing texture.\nFinally, the X- or Y-rotation of each individual segment can also be used to offset its frame-number.\nThese are the most prominent features of the texturing tool."
];

export default function TexturingTool() {

    return(
        <div>
            <PageTemplate
            workTitle = "TexturingTool"
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