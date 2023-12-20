import React, { Component, Fragment, createRef, useContext, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

import testData from '../../../testData';
import DropDownMenu from '../../ui/DropDown';
import { SelectComponent } from './containers';
import { TaskContext } from './store/context';
import FormDetail from '../FormDetail';

const ListItem = ({ listId, children, onClick, label, number }) => {
    const { selectItemMenu, selectedItemMenu, dropDownMenuIsOpen, setOpenDropDownMenu } = useContext(TaskContext);

    function setItem(val, e) {
        if (e.target.children.length === 0) {
            onClick({ id: val, label: e.target.innerText });
            selectItemMenu({ id: val, label: e.target.innerText, val: null });
        }
    }

    return (
        <li onClick={(e) => setItem(listId, e)} key={listId}>
            <div className={styles.listItem}>
                <div className={styles.listItemHeader}>
                    <span className={[styles.listItemNumber, dropDownMenuIsOpen && number === 5 ? styles.dropDownOpen : null].join(' ')}>{number}</span>
                    <div>{label}</div>
                </div>
                {!children ? null : <div>{children}</div>}
            </div>
        </li>
    )
};

const ListItemMenu = ({ children, onClick }) => {

    return (
        <ul className={styles.listContainer}>
            {children.map((item) => <ListItem label={item.label} key={item.id} onClick={onClick} listId={item.id} number={item.id + 1}>{item.value}</ListItem>)}
        </ul>
    );
}

export function TaskWizard({  id = null, title = null }) {
    const [scenarioSelected, setScen] = useState({ id: null, label: null });
    const [sideBarSelectedItem, setSidebarItem] = useState(0);
    const [titleWorkArea, setTitleWorkArea] = useState(title);
    const { setOpenDropDownMenu, openedFormDetail, setFormDetail, isDisabledWorkArea} = useContext(TaskContext);

    const changeDropDown = (value) => {
        setScen(value)
    }

    const getTitle = () => {
        return !title ? !scenarioSelected ? titleWorkArea : scenarioSelected.label : title
    }

    function getActionFromDropDown(val) {
        setOpenDropDownMenu(val.isOpen);
    }

    function setCurrent(val) {
        setSidebarItem(val);
    }
    const listMenu = [
        { id: 0, label: 'Общие данные', value: null },
        { id: 1, label: 'Параметры', value: null },
        { id: 2, label: 'Процентные ставки', value: null },
        { id: 3, label: 'Расчетные категории', value: null },
        { id: 4, label: null, value: <DropDownMenu getAction={val => getActionFromDropDown(val)} label='Сценарии' onChange={changeDropDown} isOpen={false}>{testData.dict}</DropDownMenu> },
        { id: 5, label: 'События', value: null },
    ];

    function SelectComponentEventHandler(event, row, index) {
        if (event.type === 'dblclick') {
            console.log(event);
            console.log(row, index);
            setFormDetail({ index: index, detail: row });
        }
        if (event.key === 'Escape' && !isDisabledWorkArea) {
            setFormDetail({ index: null, detail: null });
            setOpenDropDownMenu(false);
        }
    }
    return (
        (openedFormDetail.index === null) ?
            <div className={styles.taskWizardWrapper}>
                <div className={styles.sidebar} >
                    <ListItemMenu onClick={e => setCurrent(e)}>{listMenu}</ListItemMenu>
                </div>
                <SelectComponent eventHandler={SelectComponentEventHandler} idComponent={sideBarSelectedItem.id} title={getTitle()} scenario={scenarioSelected} />
                <div>
                </div>
            </div> 
            :
            <div className={styles.taskFormDetailWrapper}>
                <FormDetail eventHandler={SelectComponentEventHandler} >{openedFormDetail.detail}</FormDetail>
            </div>

    );

}

export default TaskWizard;