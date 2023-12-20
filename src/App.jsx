/* eslint-disable react/no-unknown-property */
import React, { useState, Fragment, useContext, useEffect } from 'react';
import './App.css';
import { Button } from './components/ui/buttons/index';
import Tabs from './components/ui/Tab/index';
import DropDownMenu from './components/ui/DropDown/index';
import DropDownSelect from './components/ui/DropDownSelect/index';
import Paginator from './components/ui/Paginator/index';
import SideBarMenu from './components/ui/SideBarMenu/index';
import WorkArea from './components/ui/WorkArea/index';
import TaskWizard from './components/Forms/TaskWizard';
import { TaskData } from './components/Forms/TaskWizard/store/context';

import { ContextProvider } from './context';


// const [selected, setSelected] = useState(dict2[0]);


function App({children, pathLabels, title}) {
  // const { sideBarIsOpen, setSideBarIsOpen, getSideBarState } = useContext(ContextProvider);
  const [sideBarButton, setSideBarButton] = useState({ checkedButton: null });
  const [sideBarIsOpen, setSideBarIsOpen] = useState({ isOpen: false });
  const { openedAttrProp, setAttrProp } = useContext(ContextProvider);

  function ClickHandler(param) {
    if (param.isOpen !== undefined) { setSideBarIsOpen({ isOpen: param.isOpen }); }
    if (param.checkedButton !== undefined) { setSideBarButton({ checkedButton: param.checkedButton }); }

  }

  return (
    <>
      <TaskData>
      <div className={openedAttrProp.code === null ? 'displayNone' : 'modal'}/>
        <SideBarMenu onClick={ClickHandler} openTasksCount={7} openTablesCount={8} bellsCount={99} />
        {/* <WorkArea isDisabled={{ isOpen: sideBarIsOpen.isOpen, sidebarButton: sideBarButton.checkedButton }} pathLabels={['Договор или продукт', 'Кредит']} title='Продукт: Равномерное распределение ОД'><TaskWizard /></WorkArea> */}
        <WorkArea isDisabled={{ isOpen: sideBarIsOpen.isOpen, sidebarButton: sideBarButton.checkedButton }} pathLabels={pathLabels} title={title}>{children}</WorkArea>
      </TaskData>
    </>
  )
}
export default App
