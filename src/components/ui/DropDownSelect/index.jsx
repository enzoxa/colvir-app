import styles from "./styles.module.css";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import vector from './assets/vector.svg';


export class DropDownSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.defaultSelect,
            isOpen: this.props.isOpen
        };
    }
    static propTypes = {
        children: PropTypes.array.isRequired,
        name: PropTypes.string,
        defaultSelect: PropTypes.object,
        isOpen: PropTypes.bool
    };

    static defaultProps = {
        children: [],
        name: null,
        defaultSelect: null,
        isOpen: false
    };

    //Действие по клику
    toggleDropDown = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    };

    changeClass = event => {
        event.target.className += styles.open;
    };

    // const {selected, setSelect}= useState(null);
    handleClick = event => {
        const select = this.props.children.find(item => item.label === event.target.textContent.trim())
        this.setState({selected: select});
        
        this.setState({isOpen: !this.state.isOpen});

    }
    render() {
        const { children } = this.props;
        const {isOpen, selected} = this.state;
        return (
            <>
            <div className={styles.wrapper}>
                <div className={styles.selectDropDown}
                    onClick={this.toggleDropDown}>
                <p>{!selected  ? 'Выберите значение' : selected.label}</p>
                <img src={vector} alt='vector' className={[styles.arrow, isOpen? styles.rotate: null].join(' ')}/>
                </div>
                
                
                <div className={styles.displayArea} onClick={(event) => this.handleClick(event)} >
                    {isOpen && (
                        
                        children.map((item) => <Fragment key = {item.value} ><div className={styles.displayItem}> {item.label}</div></Fragment>)                         
                            
                    )}
                </div>
            </div>
            </>
        )
    }
}

export default DropDownSelect;