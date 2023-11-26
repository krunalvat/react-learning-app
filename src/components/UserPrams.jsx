import React from "react";
import { useParams } from "react-router-dom";

const UserPrams = () => {
    const {name, id} = useParams();

    return (
        <>
        <h1 className="text-center">
            Hello { name} {id}
        </h1>
        </>
    )

}


export default UserPrams;