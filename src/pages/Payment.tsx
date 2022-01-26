import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Payment: React.FunctionComponent = () => {

    return (
        <>
            <div id="page" className='container px-5'>
                <div className="flex mt-96 flex-grow">
                    <div className="">
                        <p className="text-xl">Vielen Dank für Ihre Bestellung :)</p>
                        <p className="text-red text-xl ">Ihre Bezahlmethode wird geladen!</p>
                    </div>
                    <FontAwesomeIcon icon="spinner" className='text-red self-center flex-grow text-2xl' />
                </div>
            </div>
        </>
    )
}
