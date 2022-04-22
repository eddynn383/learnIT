import React from 'react';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Learner from './pages/Learner';
import Tutor from './pages/Tutor';
import Layout from './pages/Layout';
import Admin from './pages/Admin';
import Missing from './pages/Missing';
import Unauthorized from './pages/Unauthorized';
import RequireAuth from './components/RequireAuth';
import RequireNonAuth from './components/RequireNonAuth';
import { Routes, Route } from 'react-router-dom';

const ROLES = {
    'Learner': 100,
    'Tutor': 200,
    'Admin': 900
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Public routes */}
                <Route path="/" element={<Dashboard />} />

                {/* <Route element={<RequireNonAuth />}> */}
                    <Route path="signup" element={<Signup />} />
                    <Route path="signin" element={<Signin />} />
                {/* </Route> */}
                
                <Route path="unauthorized" element={<Unauthorized />} />
                {/* Protected routes */}
                <Route element={<RequireAuth allowedRoles={[ROLES.Learner]} />}>
                    <Route path="learner" element={<Learner />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={[ROLES.Tutor]} />}>
                    <Route path="tutor" element={<Tutor />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                    <Route path="admin" element={<Admin />} />
                </Route>
                {/* catch all */}
                <Route path="*" element={<Missing />} />
            </Route>
        </Routes>
    );
}

export default App;
