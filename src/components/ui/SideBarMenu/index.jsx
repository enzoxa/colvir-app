import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

import colvir from './assets/colvir.svg';
import bell from './assets/bell.svg';
import folder_time from './assets/folder_time.svg';
import folder_time_reverse from './assets/folder_time_reverse.svg';
import nine_dots from './assets/nine_dots.svg';
import nine_dots_reverse from './assets/nine_dots_reverse.svg';
import people from './assets/people.svg';
import text_table from './assets/text_table.svg';
import ico_clear_btn from './assets/ico_close.svg';
import preview_windows from './assets/preview_windows.png';

import { TreeList } from './TreeList';

import testData from '../../../testData';


export class SideBarMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen,
            openTasksCount: this.props.openTasksCount,
            openTablesCount: this.props.openTablesCount,
            bellsCount: this.props.bellsCount,
            checkedButton: null
        };
    }

    static propTypes = {
        isClosedDefault: PropTypes.bool,
        openTasksCount: PropTypes.number,
        openTablesCount: PropTypes.number,
        bellsCount: PropTypes.number,
        isOpen: PropTypes.bool
    };

    static defaultProps = {
        isClosedDefault: false,
        isOpen: false
    };

    handleNineDots() {
        const checkedButton = this.state.checkedButton;
        const isOpen = this.state.isOpen;
        if (checkedButton === null || (checkedButton === 0 && isOpen === true)) {
            this.props.onClick({isOpen: !isOpen, checkedButton: 0});
            this.setState({ isOpen: !isOpen });
        }
        this.props.onClick({checkedButton: 0});
        this.setState({ checkedButton: isOpen === false || checkedButton !== 0 ? 0 : null });        
    }

    handleFolderTime() {
        const checkedButton = this.state.checkedButton;        
        if (checkedButton === null || (checkedButton === 1 && this.state.isOpen === true)) {
            this.props.onClick({isOpen: !this.state.isOpen, checkedButton: 0}); //Возврат состояния в родитель    
            this.setState({ isOpen: !this.state.isOpen });
        }        
        this.props.onClick({checkedButton: 1});
        this.setState({ checkedButton: (this.state.isOpen === false || checkedButton !== 1) ? 1 : null });
    }

    swhitchMenu(param) {
        switch(param) {
            case 0:
                return (
                    <div className={styles.menuContainer}>
                        <div className={styles.searchContainer}>
                            <div className={styles.searchInputClearButton}><img src={ico_clear_btn} alt='Очистить' /></div>
                            <input id='sidebarsearch' className={styles.searchInput} icon='search' placeholder='Найти' />
                        </div>
                        <TreeList treeData={testData.treeData} />
                    </div>
                )
            case 1:
                return (
                    <div className={styles.menuWindows}><img src={preview_windows} alt='preview_window'/> </div>
                )
        }
    }

    render() {
        const { isOpen, openTasksCount, openTablesCount, bellsCount, checkedButton } = this.state;
        return (
            <div className={[styles.sideBarWrapper, isOpen ? styles.open : styles.closed].join(' ')}>
                <div className={styles.iconContainer}>
                    <div className={styles.colvir}><img src={colvir} alt='colvir' /></div>
                    <div className={styles.buttonContainer}>
                        <div onClick={() => this.handleNineDots()} className={isOpen && checkedButton === 0 ? styles.buttonItemOpen : styles.buttonItem}><img src={isOpen && checkedButton === 0 ? nine_dots_reverse : nine_dots} alt='nine_dots' /></div>
                        <div onClick={() => this.handleFolderTime()} className={isOpen && checkedButton === 1 ? styles.buttonItemOpen : styles.buttonItem}><img src={isOpen && checkedButton === 1? folder_time_reverse : folder_time} alt='folder_time' /><div className={styles.count}>{openTasksCount}</div></div>
                        <div className={styles.buttonItem}><img src={text_table} alt='text_table' /><div className={styles.count}>{openTablesCount}</div></div>
                        <div className={styles.buttonItem}><img src={bell} alt='bell' /><div className={styles.count}>{bellsCount}</div></div>
                    </div>
                    <div className={styles.people}><img src={people} alt='people' /></div>
                </div>
                {this.swhitchMenu(checkedButton)}
            </div>
        );
    }
}

export default SideBarMenu;