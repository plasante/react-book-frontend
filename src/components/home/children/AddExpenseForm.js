import React, {useContext, useState} from 'react';
import { AppContext } from "../../../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = props => {
    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

    }

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm mt-3'>
                    <label htmlFor='name'>Name:&nbsp;</label>
                    <input
                        required='required'
                        id='name'
                        name='name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className='col-sm mt-3'>
                    <label htmlFor='cost'>Cost:&nbsp;</label>
                    <input
                        required='required'
                        id='cost'
                        name='cost'
                        type='text'
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    ></input>
                </div>
                <div className='col-sm mt-3'>
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm;