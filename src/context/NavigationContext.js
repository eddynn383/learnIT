import { createContext } from 'react';

const defaultNav = [{
    text: 'Dashboard',
    url: '/dashboard',
    classes: ['link', 'link--dashboard'],
    iconBefore: 'faGaugeHigh'

}, {
    text: 'Catalog',
    url: '/catalog',
    classes: ['link', 'link--catalog'],
    iconBefore: 'faBook'
}, {
    text: 'My courses',
    url: '/mycourses',
    classes: ['link', 'link--mycourses'],
    iconBefore: 'faSwatchbook'
}, {
    text: 'My competencies',
    url: '/mycompetencies',
    classes: ['link', 'link--mycompetencies'],
    iconBefore: 'faUserGraduate'
}, {
    text: 'Settings',
    url: '/settings',
    classes: ['link', 'link--settings'],
    iconBefore: 'faGear'
}]

const NavigationContext = createContext(defaultNav)

export const NavigationProvider = ({ children, nav = defaultNav }) => (
    <NavigationContext.Provider value={ nav }>
        {children}
    </NavigationContext.Provider>
)

export default NavigationContext

