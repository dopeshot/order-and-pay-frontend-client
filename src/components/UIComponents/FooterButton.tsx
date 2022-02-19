import React from "react";
import { Link } from "react-router-dom";

type PropTypes = {
    //scrolling Function gets passed through
    text: string,
    link?: string,
    method?: () => void,
    id?: string
}

export const FooterButton: React.FunctionComponent<PropTypes> = ({ text, link, method, id }: PropTypes) => {


    return (
        <footer id={id} className="w-full h-14 bg-red shadow-category fixed bottom-0 " >
            {method ?
                <button className="container h-full flex justify-around items-center text-white font-bold" onClick={() => method()}>
                    {text}
                </button>
                :
                <Link className="container h-full flex justify-around items-center text-white font-bold" to={link ?? '#'}>{text}</Link>
            }
        </footer>

    )
}