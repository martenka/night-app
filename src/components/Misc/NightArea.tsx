import {useEffect} from 'react';
import {useMap} from "react-leaflet";
import terminator from "../../external/terminator";

import {PathOptions} from "leaflet";
import {AppDataInterface} from "../../store/app-context";
import {getTimeToUse} from "../../utils/utils";

interface NightAreaProps {
    mapStyle?: PathOptions,
    app: AppDataInterface
    overwriteDate?: Date
}

const NightArea = (props: NightAreaProps) => {
    const map = useMap();
    useEffect(() => {
        const timeToUse = getTimeToUse(props.overwriteDate?.toString(), props.app.searchInfo.date);
        const mapTerminator = terminator({time: timeToUse});
        mapTerminator.setStyle(props.mapStyle ?? {color: "rgb(0,15,56)",fillColor: "rgba(0,52,92,0.5)", weight: 2});
        mapTerminator.addTo(map);
        return () => {
            mapTerminator.remove();
        }
    }, [map, props.app.searchInfo.date, props.mapStyle, props.overwriteDate]);
    

    return null;
};

export default NightArea;
