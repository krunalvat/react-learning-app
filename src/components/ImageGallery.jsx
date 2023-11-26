import React from "react";


const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/250/300";
const image3 = "https://picsum.photos/250/300";
const link = "/";
// using external css add css to className

function ImageGallery() {

    return (
        <>
        <section className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h1 className='heading'>Image Gallery From Image Gallery JSX</h1>
                    </div>
                    <div className="col-lg-6 header-img d-flex justify-content-center flex-column">
                        <div className='img_div'>

                            <a href={link}>
                                <img src= {image1} alt="randomImage" />
                                <img src= {image2} alt="randomImage" />
                                <img src= {image3} alt="randomImage" />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    );
    
}

export default ImageGallery;