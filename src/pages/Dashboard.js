import React from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';
import Panel from '../components/Panel';
import Logo from '../components/Logo';
import logoPath from '../assets/logo/logo-light.svg';
import '../assets/design/layout.scss';
import Navigation from '../blocks/Navigation';

const Dashboard = () => {
    const { isMobile } = useBreakpoint()
    console.log(isMobile)

    return (
        <>      
            <Panel class="layout layout--two-columns">     
                <Panel class="panel panel--left" minWidth="300px" width="33.3333%" maxWidth="400px">
                    <Logo class="logo logo--light" url={logoPath} alt="LOGO Light" width="60px"/>
                    <Navigation />
                </Panel>
                <Panel class="panel panel--right" width="66.6666%">
                    <h2>Right Panel</h2>
                </Panel>
            </Panel>  
        </>
    )
}

export default Dashboard
