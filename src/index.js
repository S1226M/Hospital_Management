import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

//Staff Side
import Home from './StaffSide/Home';
import AddPatient from './StaffSide/AddPatient';
import PatientInfo from './StaffSide/PatientInfo/PatientInfo'
import Layout from './StaffSide/Layout';
import PatientInfoById from './StaffSide/PatientInfo/PatientInfoById';
import PatientInfoByNumberAndEdit from './StaffSide/PatientInfo/PatientInfoByNumberAndEdit';
import TalkWithDoctor from './StaffSide/DoctorManagement/TalkWithDoctor';
import DoctorInfo from './StaffSide/DoctorManagement/DoctorInfo';
import DoctorSchedule from './StaffSide/DoctorManagement/DoctorSchedule';
import AppointmentData from './StaffSide/DoctorManagement/AppointmentData'

//Log In and Log Out
import SignIn from './Login&Logout/SignIn';
import SignUp from './Login&Logout/SignUp';

//Admin Side
import AdminLayout from './AdminSide/AdminLayout';
import AdminDashboard from './AdminSide/AdminDashboard';
import AddStaff from './AdminSide/AddStaff';
import ViewStaff from './AdminSide/ViewStaff';
import ViewStaffByNumber from './AdminSide/ViewStaffByNumber'
import EditStaff from './AdminSide/EditStaff'
import AllPatientInformation from './AdminSide/AllPatientInformation';
import AddPatientFromAdmin from './AdminSide/AddPatientFromAdmin';
import ManageDepartment from './AdminSide/ManageDepartment';
import ViewStaffOfThatDepartment from './AdminSide/ViewStaffOfThatDepartment'

//Patient Side
import LayOutPatientSide from './PatientSideView/LayOutPatientSide';

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
          <Route path='appointmentData' element={<AppointmentData />} />
        </Route>
        
        <Route path="admin" element={<AdminLayout />} >
          <Route path="adminDashboard" element={<AdminDashboard />} />
          <Route path="addStaff" element={<AddStaff />}/>
          <Route path="viewStaff" element={<ViewStaff />} />
          <Route path="/admin/viewStaffByNumber/:number" element={<ViewStaffByNumber />} />
          <Route path='manageDepartment' element={<ManageDepartment />} />
          <Route path='/admin/editStaff/:number' element={<EditStaff/>}/>  
          <Route path="allPatientInformation" element={<AllPatientInformation />} />
          <Route path="addPatientFromAdmin" element={<AddPatientFromAdmin />} />
          <Route path='viewStaffOfThatDepartment' element={<ViewStaffOfThatDepartment />} />
        </Route>
        
        <Route path='patientSideLayout' element={<LayOutPatientSide/>}>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);