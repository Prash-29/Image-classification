import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Model from './modelModify/model';
import UploadImage from './view/Button';
const Routes_ = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Image Upload</Link>
            </li>
            <li>
              <Link to="/model">model Converter</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element = { <UploadImage/>}>
           
          </Route>
          <Route path="/model" element={   <Model />}>
          
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Routes_;