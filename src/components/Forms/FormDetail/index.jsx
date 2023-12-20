import React, { useCallback, useEffect, useContext, useState } from "react";
import styles from './styles.module.css';
import { TaskContext } from '../TaskWizard/store/context';
import { key } from "localforage";

export function FormDetail({ children, eventHandler }) {
    const { openedFormDetail, setFormDetail } = useContext(TaskContext);

    const EscFunction = useCallback((event) => {
        if (event.key === 'Escape') {
            console.log('press esc');
            return eventHandler(event);
        }
    })

    useEffect(() => {
        
        document.addEventListener("keydown", EscFunction, false);
        return () => {
            document.removeEventListener("keydown", EscFunction, false);
        };
    }, [EscFunction])

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        Object.keys(openedFormDetail.detail).find(key => {if (key === name) { openedFormDetail.detail[key] = value }})
         setFormDetail(openedFormDetail);
      }

    return (
        <div className={styles.formDetail} id='TaskWizardFormDetail'>
            <div className={styles.headerContainer}>{children.name}</div>
            <div className={styles.bodyContainer}>
                <div className={styles.labelInput}>
                    <label className={styles.label}>Наименование</label>
                    <input className={styles.input} type="text" name="name" defaultValue={children.name} onChange={handleInputChange}/>
                </div>
                <div className={styles.labelInput}>
                    <label className={styles.label}>Код</label>
                    <input className={styles.input} name="code" defaultValue={children.code} onChange={handleInputChange}/>
                </div>
                <div className={styles.labelInput}>
                    <label className={styles.label}>Примечание</label>
                    <textarea className={styles.inputMultiLine} name="prim" defaultValue={children.prim} onChange={handleInputChange}/>
                </div>
                <div className={styles.valDate}>
                    <div className={[styles.labelInput, styles.vals].join(' ')}>
                        <label className={styles.label}>Валюта</label>
                        <input className={styles.inputVal} name="val" defaultValue={children.prim} onChange={handleInputChange}/>
                    </div>
                    <div className={styles.datesFromTo}>
                        <label className={styles.label}>Период действия</label>
                        <div className={styles.datesFromToInput}>
                            <input className={styles.inputDate}  name="datefrom" defaultValue={children.datefrom} type="datetime" onChange={handleInputChange}/>
                            <div>-</div>
                            <input className={styles.inputDate}  name="dateto" onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
                <div className={styles.trfPlan}>
                    <label className={styles.labelBold}>Основной тарифный план</label>
                    <label className={styles.label}>Тарифный план</label>
                    <input className={styles.inputRef} name="trfpln" defaultValue={children.trfpln}  onChange={handleInputChange}/>
                </div>
            </div>
        </div>
    )
}

export default FormDetail;