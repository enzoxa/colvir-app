import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./styles.module.css";

class Tabs extends Component {
  constructor(props) {
    super(props);

    // Активация первого таба при загрузке
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className={styles.tabs}>
        <ul className={styles.tablist}>
          {children.map((child) => {
            const { label, labelAddInfo } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                labelAddInfo={labelAddInfo}
              />
            );
          })}
        </ul>
        <div className={styles.tabcontent}>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelAddInfo: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick, labelAddInfo } = this.props;
    onClick(label, labelAddInfo);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        labelAddInfo
      },
    } = this;

    return (
      <li
        className={(activeTab === label) ? styles.tabListItem + ' ' + styles.tabListActive : styles.tabListItem}
        onClick={onClick}
      >
        {label + ((labelAddInfo === undefined) ? '' : labelAddInfo)}
      </li>
    );
  }
}

export default Tabs;