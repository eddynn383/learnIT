import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Panel from '../components/Panel';
import Logo from '../components/Logo';
import RequireAuth from '../components/RequireAuth';
import Navigation from '../blocks/Navigation';
import ScheduleTimeline from '../components/ScheduleTimeline';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Signin from './Signin';
import Learner from './Learner';
import Tutor from './Tutor';
import Admin from './Admin';
import Missing from './Missing';
import Unauthorized from './Unauthorized';
import logoPath from '../assets/logo/logo-light.svg';
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
            <Panel class="panel panel--left" minWidth="300px" width="33.3333%" maxWidth="400px">
                <Panel class="panel panel--top">
                    <Logo class="logo logo--light" url={logoPath} alt="LOGO Light" width="60px"/>
                </Panel>
                <Panel class="panel panel--bottom">
                    <Navigation class="nav nav--main"/>
                    <ScheduleTimeline class="schedule schedule--timeline"/>
                </Panel>
            </Panel>
            <Panel class="panel panel--right" width="66.6666%">
                <Panel class="panel panel--top">
                    <h2>Right Panel</h2>
                </Panel>
                <Panel class="panel panel--bottom">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            {/* Public routes */}
                            <Route path="/dashboard" element={<Dashboard />} />

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
                </Panel>
            </Panel>
        </div>
    )
}

export default Main