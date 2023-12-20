import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import ico_dots from './assets/ico_dots.svg';
import { ContextProvider } from '../../../context';

import AttributeProperty from '../../Forms/AttributeProperty';

export class Table extends Component {
    static contextType = ContextProvider;    
    
    constructor(props) {
        super(props);
        
        this.state = {
            currentPage: 1,
            openAttributeProp: {code: null},
        };
    }    

    static propTypes = {
        headerTitle: PropTypes.array,
        children: PropTypes.array.isRequired,
        onDoubleClickHandler: PropTypes.func
    };

    static defaultProps = {
        headerTitle: null
    };

    tableDataState = (indexColumn, indexRow, row, value) => {
        let divElem = document.createElement('div');

        if (indexColumn === 0) {
            let chekBox = document.createElement('input');
            chekBox.type = 'checkbox';
            chekBox.id = 'tableRow_' + indexRow + indexColumn;
            divElem.appendChild(chekBox);
        }

        const divValue = document.createElement('div');
        if (indexColumn === 3) {
            divValue.className = row[value.key] === 'Активно' ? styles.active : styles.notActive;
        }
        divValue.append(row[value.key]);
        divElem.appendChild(divValue);

        if (indexColumn === 3) {
            let imgElem = document.createElement('img');
            imgElem.src = ico_dots;

            if (indexColumn === 3) {
                divElem.className = row[value.key] === 'Активно' ? styles.active : styles.notActive;
            }
            divElem.appendChild(imgElem)
        }

        return divElem.innerHTML;
    }

    doubleClickHandler (event, item, indexColumn) {
        if (event.type === 'dblclick') {
            const dictProp = {code: item, pathelm: item, name: 'Наименование', view: null, icon: null, widthcolumn: 'Авто'};
            // const opnAttrProp = this.state.openAttributeProp;
            this.setState({openAttributeProp: dictProp});
            this.context.setAttrProp(dictProp);
            // return (<AttributeProperty>{item}</AttributeProperty>)
        }
    }

    getTableFromJSON(json) {
        const headerTable = !this.props.headerTitle ?
            //Если заголовки не переданы, то формируются по ключам списка
            Object.keys(json[0]).map((item, indexColumn) =>
                <th onDoubleClick={this.doubleClickHandler} key={item}>{indexColumn === 0 ? <input type='checkbox' id={'tableColumn_' + indexColumn} /> : null}{item}</th>) :

            Object.keys(this.props.headerTitle[0]).map((item, indexColumn) =>
                <th onDoubleClick={(e) => this.doubleClickHandler(e, item, indexColumn)} key={item}><div className={styles.flexRow}>{indexColumn === 0 ? <input type='checkbox' id={'tableColumn_' + indexColumn} /> : null}{this.props.headerTitle[0][item]}</div></th>);

        const rowsTable = json.map((row, indexRow) =>
            <tr id={'rowTable_' + indexRow} onDoubleClick={(event) => this.props.onDoubleClickHandler(event, row, indexRow)} key={indexRow}>{
                headerTable.map((value, indexColumn) =>
                    <td key={indexColumn}>
                        <div className={indexColumn === 3 ? styles.flexSpaceBetween : styles.flexRow} dangerouslySetInnerHTML={{ __html: this.tableDataState(indexColumn, indexRow, row, value) }} />
                    </td>)
            }
            </tr>);

        return (
            <table className={styles.table}>
                <thead><tr>{headerTable}</tr></thead>
                <tbody>{rowsTable}</tbody>
            </table>
        )
    }

    render() {
        const { children } = this.props;
        const { state, setAttrProp } = this.context;
        return(
            <div className = { styles.wrapper } >
                { this.getTableFromJSON(children) }
                {this.context.openedAttrProp.code === null ? null : <AttributeProperty>{this.state.openAttributeProp}</AttributeProperty>}
            </div>
        );
}
}

export default Table;