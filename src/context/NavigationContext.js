import { createContext, useState, useEffect } from 'react';

const defaultNav = [
    {
        name: 'link1',
        url: '/link1',
        class: 'link link--one'
    },
    {
        name: 'link2',
        url: '/link2',
        class: 'link link--two'
    },
    {
        name: 'link3',
        url: '/link3',
        class: 'link link--three'
    },
    {
        name: 'link4',
        url: '/link4',
        class: 'link link--four'
    }
]

const NavigationContext = createContext(defaultNav)

export const NavigationProvider = ({ children, nav = defaultNav }) => (
    <NavigationContext.Provider value={ nav }>
        {children}
    </NavigationContext.Provider>
)

export default NavigationContext

