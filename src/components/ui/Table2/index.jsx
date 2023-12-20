import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import ico_dots from './assets/ico_dots.svg';
import ico_table from './assets/ico_table.svg';
import ico_filer from './assets/ico_filter.svg';
import ico_gear from './assets/ico_gear.svg';

import testData from '../../../testData';
import DropDownSelect from '../DropDownSelect';
import Paginator from '../Paginator';


export class Table2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1
        };
    }



    static propTypes = {
        headerTitle: PropTypes.array,
        children: PropTypes.array,
        onDoubleClickHandler: PropTypes.func
    };

    static defaultProps = {
        headerTitle: null
    };

    tableDataState = (indexColumn, indexRow, row, value) => {
        let divElem = document.createElement('div');

        if (indexColumn === 0) {

            let hrefElm = document.createElement('a');
            hrefElm.href = 'credits_list/wizard';

            let imgElm = document.createElement('img');
            imgElm.setAttribute('src', ico_table);
            imgElm.alt = 'table';
            divElem.appendChild(imgElm);

            const divValue = document.createElement('div');
            divValue.append(row[value.key]);
            divElem.appendChild(divValue);
            divElem.className = styles.flexRow;            

            hrefElm.appendChild(divElem)
            return hrefElm.outerHTML;
        }

        else if (indexColumn === 5) {

            const divValue = document.createElement('div');
            divValue.append(row[value.key]);
            divElem.appendChild(divValue);

            let imgElem = document.createElement('img');
            imgElem.src = ico_dots;
            divElem.appendChild(imgElem);
        }
        else {

            const divValue = document.createElement('div');
            divValue.append(row[value.key]);
            divElem.appendChild(divValue);
        }

        return divElem.innerHTML;
    }

    onDoubleClickHandler = (event, row, indexRow) => {
        console.log(row, indexRow);

    }

    getTableFromJSON(json) {
        const headTitle = !this.props.headerTitle ? testData.tableHeader2 : this.props.headerTitle;
        let headerTable =

            Object.keys(headTitle[0]).map((item, indexColumn) =>
                <th key={item}><div className={styles.flexRow} style={{gap: '4px'}}>{headTitle[0][item]}<img src={ico_filer} alt='filter'/></div>{indexColumn === 5 ? <img src={ico_gear} alt='setup'/> : null}</th>);

        const rowsTable = json.map((row, indexRow) =>
            <tr id={'rowTable_' + indexRow} onDoubleClick={(event) => this.onDoubleClickHandler(event, row, indexRow)} key={indexRow}>
                {
                    headerTable.map((value, indexColumn) =>
                        <td key={indexColumn}>
                            <div className={indexColumn === 5 ? styles.flexSpaceBetween : styles.flexRow} dangerouslySetInnerHTML={{ __html: this.tableDataState(indexColumn, indexRow, row, value) }} />
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
        let { children } = this.props;
        if (children === undefined) {
            children = testData.tableList2;
        }
        return (
            <div className={styles.wrapper} >
                {this.getTableFromJSON(children)}
                <div className={styles.footer}>
                    <div className={styles.footerLeft}>
                        <div>Объектов на странице</div>
                        <DropDownSelect name='Количество на странице' defaultSelect={testData.dict2[1]}>{testData.dict2}</DropDownSelect>
                    </div>
                    <Paginator />
                </div>
            </div>

        );
    }
}

export default Table2;