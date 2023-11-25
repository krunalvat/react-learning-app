import React from "react";

function UserCard(props) {
return (
<>

    <div className="card-group" style= { {width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{ props.name }</h5>
            <p className="card-text"> { props.email}</p>
            <p className="card-text"> { props.username}</p>
        </div>
    </div>
</>
)
};

export default UserCard;