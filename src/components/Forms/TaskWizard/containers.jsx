import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Tabs from '../../ui/Tab';
import Table from '../../ui/Table';
import DropDownSelect from '../../ui/DropDownSelect';
import Paginator from '../../ui/Paginator';

import testData from '../../../testData';
import { TaskContext } from './store/context';
// import { useTaskWizardHook } from '../hooks';

const ScenarioComponent = ({ title, scenarioId, eventHandler }) => {
    
    function GetScen() {
        switch (scenarioId) {
            case 4:
                return (
                    <div className={styles.container} id='TaskWizardContainerScenario'>
                        <div className={styles.TaskWrapper}>
                            <div className={styles.header}>
                                <div className={styles.title}>{title}</div>
                            </div>
                            <Tabs>
                                <div className={styles.tabContainer} label="Информация">
                                    <Table onDoubleClickHandler={eventHandler} className={styles.tableContainer} headerTitle={testData.tableHeader}>{testData.tableList}</Table>
                                    <div className={styles.footer}>
                                        <div className={styles.footerLeft}>
                                            <div>Объектов на странице</div>
                                            <DropDownSelect name='Количество на странице' defaultSelect={testData.dict2[1]}>{testData.dict2}</DropDownSelect>
                                        </div>
                                        <Paginator />
                                    </div>
                                </div>
                                <div label={"Атрибуты"} labelAddInfo={" (3)"}>
                                    Текст внутри таба 2
                                </div>
                                <div label="Детали">
                                    Текст внутри таба 3
                                </div>
                            </Tabs>
                        </div>
                    </div>)

            default:
                return <div>{title}</div>;
        }
    }
    return (
        GetScen()

    );

}

const MainData = ({ title }) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.TaskWrapper}>Страница с общими данными</div>
        </div>
    );
};

export function SelectComponent(props) {
     const { selectedItemMenu } = useContext(TaskContext);
    // const [selectedItemMenu, setItemMenu] = useTaskWizardHook();

    switch (props.idComponent) {
        case 0:
            return <MainData title={selectedItemMenu.label} />;
        case 4:
            return <ScenarioComponent eventHandler={props.eventHandler} title={selectedItemMenu.label} scenarioId={props.scenario.id} />;
        default:
            return (<div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.title}>{selectedItemMenu.label}</div>
                </div>
                <div className={styles.TaskWrapper}></div>
            </div>);
    }
}

export default { SelectComponent }