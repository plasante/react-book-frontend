import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TiDelete} from "react-icons/ti";
import {AppContext} from '../../context/AppContext';

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);

    const handleDeleteExpense = () => {
        console.log(`Deleting ${props.id}`)
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    return (
      <li className='list-group-item d-flex justify-content-between align-items-center'>
          {props.name}
          <div>
              <span className='badge bg-primary mr-3'>
                  ${props.cost}

              </span>
              <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
          </div>
      </li>
    )
}

export default ExpenseItem;