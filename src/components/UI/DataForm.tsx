import React, {useReducer} from 'react';
import Input from "./Input";
import styles from "./dataform.module.css";
import Button from "./Button";
import {ApiResponseInterface, AppActionTypes, DataFormState, useAppContext} from "../../store/app-context";
import {dateValidator, getDataFromLocAndTime} from "../../utils/utils";

export enum DataFormActionTypes {
    LatChange = "LAT_CHANGE",
    LongChange = "LONG_CHANGE",
    DateChange = "DATE_CHANGE"
}

export interface DataFormAction {
    type: DataFormActionTypes,
    payload: {
        fieldData: string,
        ok?: boolean
    }
}

export const dataFormReducer = (dataState: DataFormState, action: DataFormAction) => {
    switch (action.type) {
        case DataFormActionTypes.LatChange:
            return {
                ...dataState,
                latitude: action.payload.fieldData
            }
        case DataFormActionTypes.LongChange:
            return {
                ...dataState,
                longitude: action.payload.fieldData
            }
        case DataFormActionTypes.DateChange:
            return {
                ...dataState,
                date: action.payload.fieldData
            }
    }
}

const initialDataFormState : DataFormState= {
    latitude: "",
    longitude: "",
    date: "",
}

const DataForm = () => {
    const [formState, dispatch] = useReducer(dataFormReducer, initialDataFormState);
    const {appDataDispatch} = useAppContext();

    const submitHandler = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!dateValidator(formState.date)) {
            console.log("Date has wrong format!");
            return;
        }

        const apiResult = await getDataFromLocAndTime(formState.latitude, formState.longitude, formState.date);

        appDataDispatch({type: AppActionTypes.ApiResponseChange, payload: {data: apiResult.results, responseReady: true} as ApiResponseInterface});
    }

    return (
        <form className={styles["coordinate-form"]} onSubmit={submitHandler}>
            <Input id={"input1"} label={"Lat"} type={"text"} dataType={DataFormActionTypes.LatChange}
                   changeHandler={dispatch}/>
            <Input id={"input2"} label={"Long"} type={"text"} dataType={DataFormActionTypes.LongChange}
                   changeHandler={dispatch}/>
            <Input id={"input3"} label={"Date"} type={"text"} dataType={DataFormActionTypes.DateChange}
                   changeHandler={dispatch}/>
            <Button text={"Go"}/>
        </form>
    );
};

export default DataForm;
