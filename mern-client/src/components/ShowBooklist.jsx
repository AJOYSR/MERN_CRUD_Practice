import React, { useState, useContext, useEffect } from "react"
import '../App.css'
import axios from "axios"
import { Link } from "react-router-dom"
import BookCard from './BookCard';


const ShowBooklist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/book/')
      .then((res) => {
        // console.log('res',res);
        // console.log('data',res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBooklist');
      })
  }, []);

  const bookList = books.length === 0 ? 'there is no book records'
    : books.map((book, k) => <BookCard book={book} key={k} />)


  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-book'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

export default ShowBooklist;