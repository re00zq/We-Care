import {
  LandingPage, SignIn, SignUp, RequireAuth,
  Layout, Profile, PersistLogin, DoctorDash, PatientDash,
  ForgetPassword, ConfirmEmail, ResetPassword, DoctorSignUp, MainAppintment
} from './Components/Exports'
import { Route, Routes, useLocation } from 'react-router-dom';
import { ROLES } from './Config/Roles';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './Redux/Slices/UserSlice';

function App() {
  const userInfo = useSelector(selectCurrentUser)
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route element={<PersistLogin />}>
            <Route path="signupDoctor" element={<DoctorSignUp />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route path="verify" element={<ConfirmEmail />} />
            <Route path="reset/:token" element={<ResetPassword />} />
            <Route index element={<LandingPage />} />
            <Route path="doctor/:dash" element={<DoctorDash />} />
            <Route path="patient/:dash" element={<PatientDash />} />
            <Route path="book-appointment" element={<MainAppintment />} />
            <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
              <Route index element={<LandingPage />} />
              <Route path={userInfo?.username} element={<Profile />} />
              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                {/* <Route path="dashboard" element={<Dashboard />} /> */}
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
