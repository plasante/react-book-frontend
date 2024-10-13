import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload),
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    token: '',
    expenses: [
        { id: 12, name: 'shopping', cost: 500},
        { id: 13, name: 'holiday', cost: 400},
        { id: 14, name: 'car service', cost: 60},
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            token: state.token,
            dispatch,
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
