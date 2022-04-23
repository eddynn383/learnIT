import { createContext, useState, useEffect } from 'react';

const defaultNav = [{
    name: 'Dashboard',
    url: '/dashboard',
    class: 'link link--dashboard',
    iconPos: 'before',
    iconValue: 'faGaugeHigh'

}, {
    name: 'Catalog',
    url: '/catalog',
    class: 'link link--catalog',
    iconPos: 'before',
    iconValue: 'faBook'
}, {
    name: 'My courses',
    url: '/mycourses',
    class: 'link link--mycourses',
    iconPos: 'before',
    iconValue: 'faSwatchbook'
}, {
    name: 'My competencies',
    url: '/mycompetencies',
    class: 'link link--mycompetencies',
    iconPos: 'before',
    iconValue: 'faUserGraduate'
}, {
    name: 'Settings',
    url: '/settings',
    class: 'link link--settings',
    iconPos: 'before',
    iconValue: 'faGear'
}]

const NavigationContext = createContext(defaultNav)

export const NavigationProvider = ({ children, nav = defaultNav }) => (
    <NavigationContext.Provider value={ nav }>
        {children}
    </NavigationContext.Provider>
)

export default NavigationContext

