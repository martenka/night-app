import React from 'react';


export enum AppActionTypes {
    ApiResponseChange = "API_RESPONSE_CHANGE",
    SearchDataChange = "SEARCH_DATA_CHANGE"
}

export interface SunsetApiInterface {
    day_length: string,
    sunrise: string,
    sunset: string,
    astronomical_twilight_begin: string,
    astronomical_twilight_end: string,
    civil_twilight_begin: string,
    civil_twilight_end: string,
    nautical_twilight_begin: string,
    nautical_twilight_end: string,
    solar_noon: string
}
export interface DataFormState {
    latitude: string,
    longitude: string,
    date: string,
}

export interface ApiResponseInterface {
    data?: SunsetApiInterface,
    responseReady: boolean,
}
export interface AppDataInterface {
    api: ApiResponseInterface
    searchInfo: DataFormState
}

export interface AppActionInterface {
    type: AppActionTypes.ApiResponseChange | AppActionTypes.SearchDataChange,
    payload: ApiResponseInterface | DataFormState
}

export interface AppContextType {
    appData?: AppDataInterface,
    appDataDispatch:  React.Dispatch<AppActionInterface>
}

export const initialApiResponse : SunsetApiInterface = {
    day_length: "",
    sunrise: "",
    sunset: "",
    astronomical_twilight_begin: "",
    astronomical_twilight_end: "",
    civil_twilight_begin: "",
    civil_twilight_end: "",
    nautical_twilight_begin: "",
    nautical_twilight_end: "",
    solar_noon: ""
}

export const initialAppState : AppDataInterface = {
    api : {
        responseReady: false,
        data: initialApiResponse
    },
    searchInfo: {
        latitude: "",
        longitude: "",
        date: ""
    }
}

export const initialAppContext: AppContextType = {
    appData: undefined,
    appDataDispatch: () => {}
}


export const AppContext = React.createContext(initialAppContext);

export const useAppContext = () => {
    return React.useContext(AppContext);
}

