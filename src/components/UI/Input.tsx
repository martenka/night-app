import React from 'react';
import styles from "./input.module.css";
import {DataFormAction, DataFormActionTypes} from "./DataForm";

interface InputProps {
    id: string,
    label: string,
    type: string,
    dataType: DataFormActionTypes,
    changeHandler: React.Dispatch<DataFormAction>
    validator?: (data: string) => boolean
}

const Input = (props : InputProps) => {
    const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => props.changeHandler({type: props.dataType, payload: {fieldData: e.target.value}});

    return (
        <div className={styles.input}>
            <label htmlFor={props.id} >{props.label}</label>
            <input type={props.type} id={props.id} onChange={changeHandler} />
        </div>
    );
};

export default Input;
