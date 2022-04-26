import { createContext } from 'react';

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

const NavigationContext = createContext(defaultNav)

export const NavigationProvider = ({ children, nav = defaultNav }) => (
    <NavigationContext.Provider value={ nav }>
        {children}
    </NavigationContext.Provider>
)

export default NavigationContext

