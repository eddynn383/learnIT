import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RequireAuth from '../components/RequireAuth';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Catalog from './Catalog';
import Signup from './Signup';
import Signin from './Signin';
import Learner from './Learner';
import Tutor from './Tutor';
import Admin from './Admin';
import Missing from './Missing';
import Unauthorized from './Unauthorized';

import '../assets/design/layout.scss';

const Main = (o) => {

    const inlineStyle = {
        width: o.width,
        minWidth: o.minWidth,
        maxWidth: o.maxWidth
    }

    const ROLES = {
        'Learner': 100,
        'Tutor': 200,
        'Admin': 900
    }

    return (
        <div className={o.class} style={inlineStyle}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Public routes */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/catalog" element={<Catalog />} />

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
        </div>
    )
}

export default Main