import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
const ListPage = React.lazy(() => import("./Component/ListPage/ListPage"));
const ListDetails = React.lazy(() => import("./Component/ListDetails/ListDetails"));
// import ListPage from './Component/ListPage/ListPage';
// import ListDetails from './Component/ListDetails/ListDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListPage />} />
        
        {/* <Route path="details" element={<ListDetails />} /> */}
        <Route
          path="details"
          element={
            <React.Suspense fallback={<>...</>}>
              <ListDetails />
            </React.Suspense>
          }
        />
        <Route
          path="details"
          element={
            <React.Suspense fallback={<>...</>}>
              <ListPage />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
