import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type PropTypes = {
    name: string,
    id: string,
    icon: string | IconDefinition
}

export const PaymentMethod: React.FunctionComponent<PropTypes> = ({ name, icon, id }: PropTypes) => {

    return (
        <div className="flex items-center pl-3 pr-3 pt-3">
            <div className="flex w-full pl-3 text-xl items-center">
                <FontAwesomeIcon icon={icon as IconProp} className='text-red' />
                <p className='pl-3'>{name}</p>
            </div>
            <input type="radio" name="checked" value={id} defaultChecked={true} />
        </div>
    )
}
