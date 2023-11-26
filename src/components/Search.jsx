import React, { useState } from "react";
import SearchResult  from "./SearchResult";


const Search = () => {

    const [search,setSearch] = useState("");

    const searchData = (event) => {
        const data =  event.target.value;
        setSearch(data);
    }

    return (
        <>
            <div className="text-center">
                <input type="search" placeholder="Search anything" value={search} onChange={searchData}/>
            </div>
            <div>
                { search === '' ? null : <SearchResult name={search} />}
            </div>
        </>
    );
}

export default Search;