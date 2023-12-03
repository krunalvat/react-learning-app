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
            <div className="container" >
            <div className="menu-tab d-flex justify-content-around">

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
            </div>
            <div className="row row-cols-3 g-3 mt-5">
            {items.map((element) => {
                    const { id, name, image,price } = element;
                    return (
                        <div class="col">
                            <div className="card mb-3" key={id}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={image} className=" img-fluid" alt={image} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <p className="card-text text-success">
                                                Price: {price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default GalleryMenu;
