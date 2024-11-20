import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Home/Home';
import AddPatient from './AddPatient/AddPatient';
import PatientInfo from './PatientInfo/PatientInfo';
import Layout from './Layout/Layout';
import PatientInfoById from './PatientInfo/PatientInfoById';
import PatientInfoByIdAndEdit from './PatientInfo/PatientInfoByIdAndEdit';
import SignIn from './Login&Logout/SignIn';
import SignUp from './Login&Logout/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/layout/"
          element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        >
          <Route path="home" element={<Home />} />
          <Route path="addPatient" element={<AddPatient />} />
          <Route path="patientInfo" element={<PatientInfo />} />
          <Route path="patient/:number" element={<PatientInfoById />} />
          <Route path="patient/edit/:number" element={<PatientInfoByIdAndEdit />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
