import React from 'react';
import {SunsetApiInterface} from "../../store/app-context";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(CustomParseFormat);

interface DataShowerInterface {
    data : SunsetApiInterface
}
const DataShower = (props:DataShowerInterface) => {
    return (
        <div>
            <p>Astronoomiline koidik: {props.data.astronomical_twilight_begin}</p>
            <p>Astronoomiline loojang: {props.data.astronomical_twilight_end}</p>
            <p>Päeva pikkus: {props.data.day_length}</p>
            <p>Öise perioodi pikkus: {dayjs(props.data.nautical_twilight_end,"HH:mm:ss A").diff(dayjs(props.data.nautical_twilight_begin,"HH:mm:ss A"),"hour",true).toFixed(3)} tundi </p>
        </div>
    );
};

export default DataShower;
