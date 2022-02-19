import React from "react";
import { Link } from "react-router-dom";

type PropTypes = {
    //scrolling Function gets passed through
    text: string,
    id: string,
    link: string
}

export const FooterButton: React.FunctionComponent<PropTypes> = ({ text, id, link }: PropTypes) => {


    return (

        <footer className="w-full h-14 bg-red shadow-category fixed bottom-0 ">
            <button className="container h-full flex justify-around items-center text-white font-bold">
                <Link id={id} to={link} >{text}</Link>

            </button>
        </footer>

    )
}