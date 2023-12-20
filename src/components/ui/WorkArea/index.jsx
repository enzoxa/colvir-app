import React, { useEffect, useState, useContext} from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.module.css';

import ico_save from './assets/save.svg';
import separate from './assets/separate.svg';
import cross from './assets/cross.svg';
import dot from './assets/dot.svg';
import { TaskContext } from '../../Forms/TaskWizard/store/context';
import { ContextProvider } from '../../../context';

 function WorkArea({ children, pathLabels, title, isDisabled } ) {    
    const { isDisabledWorkArea, setDisableWorkArea } = useContext(TaskContext);
    // const [disabled, setDisable] = useState(isDisabled);
    // const { sideBarIsOpen, setSideBarIsOpen, getSideBarState } = useContext(ContextProvider);

    useEffect(() => {
        setDisableWorkArea(isDisabled.isOpen);
    },[isDisabled]);

    WorkArea.propTypes = {
        pathLabels: PropTypes.array,
        title: PropTypes.string,        
        children: PropTypes.object,
        isDisabled: PropTypes.object
    };

    WorkArea.defaultProps = {
        pathLabels: null,
        title: null,
        isDisabled: false
    };

    return (    
        <div className={isDisabled.isOpen ? [styles.workAreaDisabled, isDisabled.sidebarButton === 0? styles.disable0: styles.disable1].join(' ') : styles.workArea}>
        {isDisabled.isOpen? <div className={styles.disableLayer}/> : null}
            <div className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    <div className={styles.headerLeftPath}>
                        {!pathLabels ? null :
                            pathLabels.map((item, index) => <div key={index}>{item}</div>)
                            .reduce((prev, curr, index) => [prev, <img key={index + '_dot'} src={dot} />, curr])}
                    </div>
                    <div className={styles.headerLeftTitle}>{title}</div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.headerRightSearchContainer}>
                        <div><img src={ico_save} alt='save' /></div>
                        <input className={styles.SearchInput} alt='input' name='searchHeader' placeholder="Найти" type="text"></input>
                    </div>
                    <div><img src={separate} alt='separate' /></div>
                    <div><img src={cross} alt='cancel' /></div>
                </div>
            </div>            
            <div className={styles.task}>{children}</div>            
        </div>
    );


}

export default WorkArea;