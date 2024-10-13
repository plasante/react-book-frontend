import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Budget from "./Budget";
import Remaining from "./Remaining";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./AddExpenseForm";

const Home = () => {

    //const { token } = useContext(AppContext);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = !!token;
        if (isLoggedIn) {
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [token, navigate])

    return (
        <>
            <h1 className="mt-3">
                (Home) My Budget Planner
            </h1>
            <div className="row mt-3">
                <div className="col-sm">
                    <Budget/>
                </div>
                <div className="col-sm">
                    <Remaining/>
                </div>
                <div className="col-sm">
                    <ExpenseTotal/>
                </div>
                <h3 className="mt-3">Expenses</h3>
                <div className='row mt-3'>
                    <div className="col-sm">
                        <ExpenseList/>
                    </div>
                </div>
                <h3 className='mt-3'>Add Expense</h3>
                <div className='mt-3'>
                    <div className="col-sm">
                        <AddExpenseForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;