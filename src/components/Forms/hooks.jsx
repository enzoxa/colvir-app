import React, { useState } from 'react';

export function useTaskWizardHook () {  
  const [selectedItemMenu, setItemMenu] = useState({id: null, label: null, value: null, isSelected: false}); 

  function handleChange(value) { 									
    setItemMenu(value);
    // selectedItemMenu = value;
}

function getVal() {
    return selectedItemMenu;
}
// return [selectedItemMenu, setItemMenu, handleChange];	

  return [selectedItemMenu, setItemMenu, handleChange, getVal ];
}

export default useTaskWizardHook;