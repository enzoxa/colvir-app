import React, { createContext, useEffect, useState } from "react";

export const ContextProvider = createContext();

export function DataContext({children}) {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
    const [openedAttrProp, setAttrProp] = useState({code: null, detail: null});

    function getSideBarState() {
        return sideBarIsOpen;
    }

    useEffect(()=> {
        setSideBarIsOpen(false)
    },[sideBarIsOpen])

    return (
        <ContextProvider.Provider
            value={{
                sideBarIsOpen, setSideBarIsOpen, getSideBarState,

                openedAttrProp, setAttrProp
            }}
            >
                {children}
            </ContextProvider.Provider>
    );
}

export default {ContextProvider, DataContext};