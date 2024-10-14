import React, {useState, useEffect} from 'react';
import fetchBooks from "../apis/FetchBooks";

const Book = () => {

    const [bookArray, setBookArray] = useState([]);

    /**
     * Pour garantir que les donnees sont recuperer du serveur lorsque le composant
     *     est montee.
     */
    useEffect(() => {
        fetchBooks('/books')
            .then(res => {
                setBookArray(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <h3>Books</h3>
            {bookArray.map((book, index) => (
                <div key={index}>
                    <h4>{book.title}</h4>
                    <p>{book.author}</p>
                </div>
            ))}
        </>
    )
}

export default Book;