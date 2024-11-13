import {createContext, useEffect, useState} from 'react';
const NavigationContext = createContext();

function NavigationProvider({children}){

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }

        document.addEventListener("popstate", handler);

        return () => document.removeEventListener("popstate", handler);

    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(window.location.pathname);
    }
    return <NavigationContext.Provider value={{currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>
}

export default NavigationProvider;
export {NavigationContext};
