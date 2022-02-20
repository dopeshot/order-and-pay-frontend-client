import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormikProps } from 'formik';
import { useAppState } from '../../overmind';
import { priceToLocal } from '../../services/utilities';

type PropTypes = {
    formik: FormikProps<any>,
}

//Custom Footer to add a Dish to the Basket
export const DishButton: React.FunctionComponent<PropTypes> = ({ formik }: PropTypes) => {
    let sum = useAppState().menu.sum

    return (
        <footer className="w-full h-14  flex items-center justify-around bg-white flex-grow fixed bottom-0">
            <div className="flex flex-grow justify-evenly items-center">
                <button type='button' data-cy="orderButtonMinus" className="rounded-lg h-7 w-7 bg-red text-white font-bold text-xs" onClick={() => { if (formik.values.count > 1) formik.setFieldValue('count', formik.values.count - 1) }}>
                    <FontAwesomeIcon icon="minus" />
                </button>
                <p data-cy="orderButtonCount">{formik.values.count}</p>
                <button type='button' data-cy="orderButtonPlus" className="rounded-lg h-7 w-7 bg-red text-white font-bold text-xs" onClick={() => formik.setFieldValue('count', formik.values.count + 1)}>
                    <FontAwesomeIcon icon="plus" />
                </button>
            </div>
            <button data-cy="orderButton" id="orderButton" className="bg-red flex-grow text-white font-bold rounded-full py-2 px-7" type='submit' >
                <p data-cy="orderButtonPrice">Für {priceToLocal(sum * formik.values.count)} hinzufügen</p>
            </button>
        </footer>
    )
}
