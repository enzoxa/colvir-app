import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskData({children}) {
    const [selectedItemMenu, setItemMenu] = useState({id: null, label: null, val: null});
    const [dropDownMenuIsOpen, setOpenDropDownMenu] = useState(false);
    const [openedFormDetail, setFormDetail] = useState({index: null, detail: null});    
    const [isDisabledWorkArea, setDisableWorkArea] = useState(false);
    function selectItemMenu(item) {
        setItemMenu(item);
    }

    return (
        <TaskContext.Provider
            value={{
                selectedItemMenu, selectItemMenu,
                
                dropDownMenuIsOpen, setOpenDropDownMenu,

                openedFormDetail, setFormDetail,

                isDisabledWorkArea, setDisableWorkArea,
            }}
            >
                {children}
            </TaskContext.Provider>
    );
}

export default {TaskContext, TaskData};