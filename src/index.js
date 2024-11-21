import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Home/Home';
import AddPatient from './PatientManagement/AddPatient';
import PatientInfo from './PatientInfo/PatientInfo';
import Layout from './Layout/Layout';
import PatientInfoById from './PatientInfo/PatientInfoById';
import PatientInfoByNumberAndEdit from './PatientInfo/PatientInfoByNumberAndEdit';
import SignIn from './Login&Logout/SignIn';
import SignUp from './Login&Logout/SignUp';
import TalkWithDoctor from './DoctorManagement/TalkWithDoctor';
import DoctorInfo from './DoctorManagement/DoctorInfo';
import DoctorSchedule from './DoctorManagement/DoctorSchedule';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<SignIn setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/layout" element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
          <Route path="home" element={<Home />} />
          <Route path="addPatient" element={<AddPatient />} />
          <Route path="patientInfo" element={<PatientInfo />} />
          <Route path="patient/:number" element={<PatientInfoById />} />
          <Route path="patient/edit/:number" element={<PatientInfoByNumberAndEdit />} />
          <Route path="talkWithDoctor" element={<TalkWithDoctor />} />
          <Route path="doctorInfo" element={<DoctorInfo />} />
          <Route path="doctorSchedule" element={<DoctorSchedule />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
