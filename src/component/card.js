import React from "react";
import "../component/card.css";

const Card = ({ profile, onDelete }) => {
    const { avatar, name, job, rate, posterUrl } = profile;
    return (
        <div className="cardpr card ">

            <img src={avatar} alt="avatar" />
            <div className="card-body">
                <h2>{name}</h2>
                <h3>{job}</h3>
                <h3>{rate}</h3>

                <button onClick={() => window.location = posterUrl}  >Link </button>
            </div>
        </div>
    );
};



export default Card;
