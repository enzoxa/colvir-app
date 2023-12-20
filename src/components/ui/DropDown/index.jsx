import React, { Component  } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import vector from './assets/vector.svg';

export class DropDownMenu extends Component {
    constructor(props) {
        super(props);           
        this.state = {
            isOpen: this.props.isOpen,  
            selectedItem: null          
        };
    } 
    
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        labelAddInfo: PropTypes.string,
        children: PropTypes.array,
        onChange: PropTypes.func,
        getAction: PropTypes.func,
        outSideClickClose: PropTypes.bool,
    };

    static defaultProps = {
        isOpen: false,
        label: PropTypes.string.isRequired,
        labelAddInfo: null,
        children: null,
        outSideClickClose: false
    };

    state = {
        isOpen: this.props.isOpen
    };

    //Добавить прослушивателя при условии outSideClickClose
    componentDidMount() {
        this.props.outSideClickClose ? document.addEventListener("click", this.handleClickOutside) : null;        
    }
    
    //Удалить прослушивателя
    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    //Если клик произошел вне элемента
    //Закрыт выпадающий список
    handleClickOutside = event => {
        const path = event.path || (event.composedPath && event.composedPath());
        const { onChange } = this.props;

        if (
            !path.includes(this.displayAreaRef) &&
            !path.includes(this.dropTogglerRef)
        ) {
            this.setState({
                isOpen: false,
                selectedItem: null
            });

            onChange && onChange(false);
        }
    };

    //Действие по клику
    toggleDropDown = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen, selectedItem: isOpen ? null :  this.state.selectedItem});
        !this.props.getAction ? null : this.props.getAction({ isOpen: !isOpen, selectedItem: isOpen ? null :  this.state.selectedItem});
    };
    handleDropdownChange = (event) => {
        return event;
    };

    handleClick = index => {
        this.setState({selectedItem: index});
        this.props.onChange({id: index, label: this.props.children[index].label});
    }
    
    render() {
        const { label, labelAddInfo, children } = this.props;
        const { isOpen } = this.state;
        const lAddInfo = !labelAddInfo ? children.length.toString() : labelAddInfo;
        return (
            <div className={styles.dropDownWrapper} >
                <div
                    className={styles.dropToggler}
                    onClick={this.toggleDropDown}
                    ref={ref => (this.dropTogglerRef = ref)}
                >
                    <div className={styles.dropToggler_textContainer}>
                        <div className={styles.label}>{label}</div>
                        <div className={styles.addInfo}>{lAddInfo}</div>
                    </div>
                    <img src={vector} alt='vector' className={[styles.arrow, isOpen? styles.rotateUp: styles.rotateDown].join(' ')}/>
                </div>
                {!isOpen ? null :
                <div className={styles.displayArea}>
                    {isOpen && (
                        <div className={styles.children} ref={ref => (this.displayAreaRef = ref)}>
                            <DropDownList handleClick={this.handleClick}>{children}</DropDownList>
                        </div>
                    )}
                </div>
                }
            </div>
        );
    }
}

class DropDownList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {activeElement: null};        
    }

    static propTypes = {
        children: PropTypes.array,
        handleClick: PropTypes.func
    };
    static defaultProps = {
        children: null,
    };

    handleClick(index) {
        this.setState({activeElement: index});
        this.props.handleClick(index);
    }

    render() {
        const { children } = this.props;
        
        return (
            children.map((item, index) => <div key={index} className={index === this.state.activeElement ? styles.selectedListItem : styles.unselectedListItem} onClick={this.handleClick.bind(this,index)}> {item.label}</div>)
        )
    }
}

export default  DropDownMenu ;