import React from 'react';
import {PositionObject} from "../../App";
import {useMap, useMapEvent} from "react-leaflet";
import {
    ApiResponseInterface,
    AppActionTypes,
    useAppContext
} from "../../store/app-context";
import dayjs from "dayjs";
import {getDataFromLocAndTime} from "../../utils/utils";

const PositionUpdate = (props : React.PropsWithChildren<{loc: PositionObject}>) => {
    const map = useMap();
    const {appDataDispatch} = useAppContext();
    map.setView({lat: props.loc.latitude, lng: props.loc.longitude},map.getZoom());

    useMapEvent("click", async (event) => {
        map.setView(event.latlng,map.getZoom());

        const apiResult = await getDataFromLocAndTime(event.latlng.lat+"", event.latlng.lng+"", dayjs().format("YYYY-MM-DD"));
        appDataDispatch({type: AppActionTypes.SearchDataChange, payload: {latitude: event.latlng.lat+"", longitude: event.latlng.lng+"", date: dayjs().format("YYYY-MM-DD")}})
        appDataDispatch({type: AppActionTypes.ApiResponseChange, payload: {data: apiResult.results, responseReady: true} as ApiResponseInterface});
    });

    return (
        <>
            {props.children}
        </>
    );
};

export default PositionUpdate;
