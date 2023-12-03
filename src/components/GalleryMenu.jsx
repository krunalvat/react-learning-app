import React, { useState } from "react";
import Menu from "./Menu";


const allCategory = [...new Set(Menu.map((element) => element.category)),"all"];
const GalleryMenu = () => {
    const [items, setItems] = useState(Menu);
    const [categoryItem] = useState(allCategory);

    const filterItem = (itemCategory) => {

        if(itemCategory === 'all') {
            setItems(Menu);
            return;
        } 
        const updatedItems = Menu.filter( (element) => {
                return element.category === itemCategory;
        });
        setItems(updatedItems);
    }
    return (
        <>
            <h1 className="text-center">Order Your Special Dish</h1>
            <hr/>
                <nav className="text-center ">
                    <div className="btn-group">
                    {
                        categoryItem.map( (element) => {
                            return (
                                <>
                                    <button className="btn btn-warning text-capitalize" onClick={ () => filterItem(element)}>{element}</button>
                                </>
                            )
                        })
                    }
                    </div>
                </nav>
            <section className="main-card--cointainer">
            {/* <div className="row row-cols-3 g-3 mt-5"> */}
            {items.map((element) => {
                    const { id, name, image,price,category } = element;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card ">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className="card-author subtle"> {category}</span>
                                    <h2 className="card-title"> {name} </h2>
                                    <span className="card-description subtle text-success">
                                        Price   {price}
                                    </span>
                                    <div className="card-read">Read</div>
                                </div>
                                    <img src={image} alt="images" className="card-media" />
                                </div>
                            </div>
                        </>
                        // <div class="col">
                        //     <div className="card mb-3" key={id}>
                        //         <div className="row">
                        //             <div className="col-md-4">
                        //                 <img src={image} className=" img-fluid" alt={image} />
                        //             </div>
                        //             <div className="col-md-8">
                        //                 <div className="card-body">
                        //                     <h5 className="card-title">{name}</h5>
                        //                     <p className="card-text text-success">
                        //                         Price: {price}
                        //                     </p>
                        //                 </div>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                    );
                })}
            {/* </div> */}
            </section>
        </>
    );
};

export default GalleryMenu;
