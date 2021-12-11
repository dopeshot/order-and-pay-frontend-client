export const OrderButton: React.FunctionComponent = () => {

    // Replace this with state later
    const itemsCount = 2
    const totalPrice = '5,60€'

    return (
        <footer className="fixed bottom-0 w-full h-14 bg-red shadow-category ">
            <button id="orderButton" className="container h-full flex justify-around items-center text-white font-bold">
                <p className="rounded-full w-7 h-7 bg-white text-red" style={{ lineHeight: '1.6rem' }}>{itemsCount}</p>
                <p>Warenkorb anzeigen</p>
                <p>{totalPrice}</p>
            </button>
        </footer>
    )
}
