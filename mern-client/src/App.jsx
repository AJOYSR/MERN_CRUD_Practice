import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import CreateBook from './components/CreateBook';
import ShowBookDetails from './components/ShowBookDetails';
import ShowBooklist from './components/ShowBooklist';
import UpdateBookInfo from './components/UpdateBookInfo';
UpdateBookInfo


const App = () => {
  return (
    <Router>

      <div>
        <Routes>
          <Route exact path="/" element={<ShowBooklist />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
          <Route path="/show-book/:id" element={<ShowBookDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App