import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

import left_vector_end from './assets/left_vector_end.svg';
import left_vector from './assets/left_vector.svg';
import right_vector_end from './assets/right_vector_end.svg';
import right_vector from './assets/right_vector.svg';


export class Paginator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1
        };
    }

    static propTypes = {
        counItems: PropTypes.number
    };

    static defaultProps = {
        counItems: null
    };

    render() {
        return (
            <div className={styles.wrapper}>
                <div><img src={left_vector_end} alt='left_to_start' /></div>
                <div><img src={left_vector} alt='left' /></div>
                <div className={styles.activePage}>1</div>
                <div>2</div>
                <div>3</div>
                <div>...</div>
                <div>{16}</div>
                <div><img src={right_vector} alt='right' /></div>
                <div><img src={right_vector_end} alt='right_to_end' /></div>
            </div>
        );
    }
}

export default Paginator;