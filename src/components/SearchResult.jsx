import React from "react";

const SearchResult = (props) => {

    const Img = `https://source.unsplash.com/400x400/?${props.name}`;
    return (
        <>
            <div className="text-center">
                <img src={Img} alt="search" style={{ marginTop:'20px'}} />
            </div>
        </>
    );

}

export default SearchResult;