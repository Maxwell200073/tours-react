import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import Tours from "./Tours";

const Tour = ({ id, image, info, name, price, removeTour }) => {
    // const [show, setShow] = useState(true);
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? `read less` : `read more`}
                    </button>
                </p>
                <button onClick={() => removeTour(id)} className="delete-btn">
                    not interested
                </button>
            </footer>
        </article>
    );
};

export default Tour;
