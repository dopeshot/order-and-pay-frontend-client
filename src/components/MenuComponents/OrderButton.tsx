export const OrderButton: React.FunctionComponent = () => {

    return (
        <button id="orderButton" className=" container h-full flex justify-around items-center text-white">
            <div className="flex justify-center">
                <p className="cols-span-1 text-red bg-white rounded-full pb-1 font-bold w-7 h-7 flex items-center justify-center text-center">2</p>
            </div>
            <p className="col-start-2 col-span-3 font-bold">Warenkorb anzeigen</p>
            <div className="flex justify-center">
                <p className="text-right  font-bold cols-span-1">5,60 €</p>
            </div>
        </button>

    )
}