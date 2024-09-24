import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import all components
import Home from './Home/Home';
import AddPatient from './AddPatient/AddPatient';
import Room from './Room/Room';
import Department from './Department/Department';
import PatientInfo from './PatientInfo/PatientInfo';
import PatientDischarge from './PatientDischarge/PatientDischarge';
import UpdatePatientDetails from './UpadtePatientDetails/UpdatePatientDetails';
import Layout from './Layout/Layout'; // Make sure you have a Layout component if needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="addPatient" element={<AddPatient />} />
          <Route path="room" element={<Room />} />
          <Route path="department" element={<Department />} />
          <Route path="patientInfo" element={<PatientInfo />} />
          <Route path="patientDischarge" element={<PatientDischarge />} />
          <Route path="updatePatient" element={<UpdatePatientDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);