import { React, useContext } from "react";
import styles from './styles.module.css';

import { TaskContext } from "../TaskWizard/store/context";
import { ContextProvider } from "../../../context";
import { Button } from "../../ui/buttons/index";

export function AttributeProperty({ children }) {
    const { openedAttrProp, setAttrProp } = useContext(ContextProvider);

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        Object.keys(openedAttrProp.detail).find(key => { if (key === name) { openedAttrProp.detail[key] = value } })
        setAttrProp(openedAttrProp);
    }

    function handleClick (event)  {
        setAttrProp({code: null});
    }

    return (
        <>        
        <div className={styles.wrapperAttrProperty}>
            <div className={styles.gradientSplit} />
            <span className={styles.titleHeader}>Свойства атрибута</span>
            <div className={styles.bodyContainer}>
                <div className={styles.leftContainer}>
                    <div className={[styles.labelInput, styles.vals].join(' ')}>
                        <label className={styles.label}>Код</label>
                        <input className={styles.input} name="code" defaultValue={children.code} onChange={handleInputChange} />
                    </div>
                    <div className={[styles.labelInput, styles.vals].join(' ')}>
                        <label className={styles.label}>Путь к элементу</label>
                        <input disabled className={styles.input} name="pathelm" defaultValue={children.pathelm} onChange={handleInputChange} />
                    </div>
                    <div className={[styles.labelInput, styles.vals].join(' ')}>
                        <label className={styles.label}>Наименование</label>
                        <input className={styles.input} name="name" defaultValue={children.name} onChange={handleInputChange} />
                    </div>
                </div>
                <div className={styles.rightContainer}>

                    <div className={[styles.labelInput, styles.vals].join(' ')}>
                        <label className={styles.label}>Представление</label>
                        <input className={styles.input} name="view" defaultValue={children.view} onChange={handleInputChange} />
                    </div>
                    <div className={[styles.labelInput, styles.vals].join(' ')}>
                        <label className={styles.label}>Пиктограмма</label>
                        <input className={styles.input} name="icon" defaultValue={children.icon} onChange={handleInputChange} />
                    </div>
                    <div className={[styles.labelInput, styles.vals].join(' ')}>
                        <label className={styles.label}>Ширина колонки</label>
                        <input className={styles.input} name="widthcolumn" defaultValue={children.widthcolumn} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Button onClick={handleClick} type='cancel'>Отменить</Button>
                <Button>Сохранить</Button>
            </div>
        </div>
        </>
    )
}

export default AttributeProperty;