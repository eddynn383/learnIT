import { useState, useEffect, createContext } from 'react';
import useAuth from '../hooks/useAuth';

const defaultNav = [{
    text: 'Dashboard',
    url: '/dashboard',
    classes: ['dashboard'],
    iconBefore: 'faGaugeHigh'

}, {
    text: 'Catalog',
    url: '/catalog',
    classes: ['catalog'],
    iconBefore: 'faBook'
}, {
    text: 'My courses',
    url: '/mycourses',
    classes: ['mycourses'],
    iconBefore: 'faSwatchbook'
}, {
    text: 'My competencies',
    url: '/mycompetencies',
    classes: ['mycompetencies'],
    iconBefore: 'faUserGraduate'
}, {
    text: 'Settings',
    url: '/settings',
    classes: ['settings'],
    iconBefore: 'faGear'
}, {
    text: 'Test',
    url: '/test',
    classes: ['test'],
    iconBefore: 'faVial'
}]

const NavigationContext = createContext()

export const NavigationProvider = ({ children }) => {
    const { getDB, setDB, getSnapshot, currentUser } = useAuth()
    // console.log(currentUser)
    // console.log(children)

    // useEffect(() => {
    //     const nav = getDB('navigation', 100)
        
    //     return nav;
    // },[])

    // const value = {
        
    // }
    return (
        <NavigationContext.Provider value={ getSnapshot }>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext

