import { useState, useContext, useEffect } from 'react';
import { BreakpointContext } from '../context/BreakpointContext';

export const useBreakpoint = () => {
    const mediaQueries = useContext(BreakpointContext);

    // Get initial breakpoint (on first window paint)
    const [currentBreakpoint, setCurrentBreakpoint] = useState(() => {
        const initialValue = {
            isMobile: false,
            isTablet: false,
            isTabletUp: false,
            isDesktop: false,
            isDesktopUp: false,
            isHdDesktop: false,
        };

        return Object.entries(mediaQueries).reduce((previous, [breakpoint, query]) => {
                const mediaQuery = window.matchMedia(query);
                return {
                    ...previous,
                    [breakpoint]: mediaQuery.matches
                }
            },
            initialValue,
        );
    });

    // Subscribe to breakpoint changes with window.matchQuery
    useEffect(() => {
        const unsubscribers = Object.entries(mediaQueries).map(
            ([breakpoint, query]) => {
                const list = window.matchMedia(query)

                const handleChange = ({ matches }) => {
                    setCurrentBreakpoint((previous) => ({
                        ...previous,
                        [breakpoint]: matches,
                    }));
                };

                if (typeof list.addListener === 'function') {
                    list.addListener(handleChange)
                } else {
                    list.addEventListener('change', handleChange)
                }

                return () => {
                    if (typeof list.removeListener === 'function') {
                        list.removeListener(handleChange)
                    } else {
                        list.removeEventListener('change', handleChange)
                    }
                };
            },
        );

        return () => unsubscribers.forEach((unsubscriber) => unsubscriber());
    }, [mediaQueries])

    return currentBreakpoint
}