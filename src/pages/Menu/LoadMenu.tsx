import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useActions, useAppState } from "../../overmind"
import { Menu } from "./Menu"

export const LoadingMenu: React.FunctionComponent = () => {
    const { loadMenu } = useActions().menu
    const { MenuResponseObj } = useAppState().menu

    useEffect(() => {
        let mounted = true
        if (mounted) {
            loadMenu()
        }
        return () => { mounted = false }
    }, [loadMenu])

    return (<>{MenuResponseObj.categories.length > 0 ? <Menu menu={MenuResponseObj} /> : <div className="text-center text-red">
        <FontAwesomeIcon size="2x" icon={faSpinner} className="animate-spin" />
    </div>}</>)
}
