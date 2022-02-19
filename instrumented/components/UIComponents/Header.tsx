import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


type PropTypes = {
    //scrolling Function gets passed through
    parentLink: string,
    parentId: string
}

// Category buttons that scroll to specific points in the menu
export const Header: React.FunctionComponent<PropTypes> = ({ parentLink, parentId }: PropTypes) => {


    return (


        <div className="flow-root">
            <button className="float-left p-4 pl-4 text-2xl text-left">
                <Link id={parentId} to={parentLink} ><FontAwesomeIcon icon="chevron-left" /></Link>
            </button>
            <button className="float-right p-4 text-2xl pr-6 text-right">
                <FontAwesomeIcon icon="bars" />
            </button>
        </div>

    )
}
