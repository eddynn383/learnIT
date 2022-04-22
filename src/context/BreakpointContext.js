import { createContext } from 'react';

const defaultQueries = {
    isMobile: 'only screen and (max-width: 767px)',
    isTablet: 'only screen and (min-width: 768px) and (max-width: 1023px)',
    isTabletUp: 'only screen and (min-width: 768px)',
    isDesktop: 'only screen and (min-width: 1024px) and (max-width: 1279px)',
    isDesktopUp: 'only screen and (min-width: 1024px)',
    isHdDesktop: 'only screen and (min-width: 1280px)',
};

export const BreakpointContext = createContext(defaultQueries)

export const BreakpointProvider = ({children, queries = defaultQueries}) => (
    <BreakpointContext.Provider value={queries}>
        {children}
    </BreakpointContext.Provider>
)