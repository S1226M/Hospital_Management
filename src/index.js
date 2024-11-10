import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import AddPatient from './AddPatient/AddPatient';
import PatientInfo from './PatientInfo/PatientInfo';
import Layout from './Layout/Layout'; 
import PatientInfoById from './PatientInfo/PatientInfoById';
import PatientInfoByIdAndEdit  from './PatientInfo/PatientInfoByIdAndEdit';
import Login from './Login&Logout/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="addPatient" element={<AddPatient />} />
          <Route path="patientInfo" element={<PatientInfo />} />
          <Route path="patient/:number" element={<PatientInfoById />} />
          <Route path="patient/edit/:number" element={<PatientInfoByIdAndEdit />} /> 
          <Route path="login" element={<Login />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);