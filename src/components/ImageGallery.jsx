import React from "react";


const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/250/300";
const image3 = "https://picsum.photos/250/300";
const link = "http://localhost:3000/";
// using external css add css to className

function ImageGallery() {

    return (
        <>
        <h1 className='heading'>Image Gallery From Image Gallery JSX</h1>
        <div className='img_div'>

            <a href={link}>
                <img src= {image1} alt="randomImage" />
            </a>
            <img src= {image2} alt="randomImage" />
            <img src= {image3} alt="randomImage" />
        </div>
        </>
    );
    
}

export default ImageGallery;