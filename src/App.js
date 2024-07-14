import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ListPage from './Component/ListPage/ListPage';
import ListDetails from './Component/ListDetails/ListDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<ListPage/>} />
          <Route path="details" element={<ListDetails />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <ListPage/>
    // </div>
  );
}

export default App;
