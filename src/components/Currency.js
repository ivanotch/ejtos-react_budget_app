import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        let currency = event.target.value;
        setNewCurrency(currency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }
    return (
        <>
            <label style={{backgroundColor: "lightblue"}} htmlFor="currency">Currency ({newCurrency})</label>

            <select style={{backgroundColor: "lightblue"}} className="--bs-primary" name="currency" id="currency" onChange={handleCurrencyChange}>
            <option className='' value="$">$ Dollar</option>
            <option className='' value="£">£ Pound</option>
            <option className='' value="€">€ Euro</option>
            <option className='' value="₹">₹ Ruppee</option>
            </select>
            
        </>
    );
};
export default Currency;
