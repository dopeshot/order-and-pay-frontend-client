import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

type PropTypes = {

    parentLink: string,
    parentId: string
}

export const Header: React.FunctionComponent<PropTypes> = ({ parentLink, parentId }: PropTypes) => {

    return (
        <div className="flow-root">
            <button className="float-left p-4 pl-4 text-2xl text-left">
                <Link id={parentId} data-cy={"back"} to={parentLink} ><FontAwesomeIcon icon="chevron-left" /></Link>
            </button>
            <button className="float-right p-4 text-2xl pr-6 text-right">
                <FontAwesomeIcon icon="bars" />
            </button>
        </div>
    )
}
