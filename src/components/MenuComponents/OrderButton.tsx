export const OrderButton: React.FunctionComponent = () => {


    return (

        <button id="orderButton" className="menuButton bg-red bg-cover text-white h-16 grid grid-cols-5 flex items-center shadow-2xl " style={{ boxShadow: "0px 10px 25px 10px rgba(255, 112, 112, 1)" }}>
            <div className="flex justify-center">
                <p className="cols-span-1 text-red bg-white rounded-full pb-1 font-sofia font-bold w-7 h-7 flex items-center justify-center text-center">2</p>
            </div>
            <p className="col-start-2 col-span-3 font-sofia font-bold">Warenkorb anzeigen</p>
            <div className="flex justify-center">
                <p className="text-right font-sofia font-bold cols-span-1">5,60 €</p>
            </div>
        </button>

    )
}