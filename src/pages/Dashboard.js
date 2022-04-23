import React from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

const Dashboard = () => {
    const { isMobile } = useBreakpoint()
    console.log(isMobile)

    return (
        <h2>testsetsetestset</h2>
    )
}

export default Dashboard
