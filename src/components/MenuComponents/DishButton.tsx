import { priceToLocal } from '../../services/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormikProps } from 'formik';
import { useAppState } from '../../overmind';


type PropTypes = {
    formik: FormikProps<any>,
    currentPrice: number
}

export const DishButton: React.FunctionComponent<PropTypes> = ({ formik, currentPrice }: PropTypes) => {

    let sum = useAppState().menu.sum

    return (
        <footer className="w-full h-14  flex items-center justify-around bg-white flex-grow fixed bottom-0">
            <div className="flex flex-grow justify-evenly items-center">
                <button type='button' className="rounded-lg h-7 w-7 bg-red text-white font-bold text-xs" onClick={() => { if (formik.values.count > 1) formik.setFieldValue('count', formik.values.count - 1) }}>
                    <FontAwesomeIcon icon="minus" />
                </button>
                <p>{formik.values.count}</p>
                <button type='button' className="rounded-lg h-7 w-7 bg-red text-white font-bold text-xs" onClick={() => formik.setFieldValue('count', formik.values.count + 1)}>
                    <FontAwesomeIcon icon="plus" />
                </button>
            </div>
            <button id="orderButton" className="bg-red flex-grow text-white font-bold rounded-full py-2 px-7" type='submit'>
                <p>Für {priceToLocal(sum)} hinzufügen</p>
            </button>
        </footer>
    )
}
