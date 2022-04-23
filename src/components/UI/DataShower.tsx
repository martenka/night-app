import React from 'react';
import {AppDataInterface} from "../../store/app-context";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(CustomParseFormat);

const DataShower = (props:AppDataInterface) => {
    let nightPeriod = 24 - dayjs(props.api.data.nautical_twilight_end).diff(dayjs(props.api.data.nautical_twilight_begin),"hour",true).valueOf();

    //API doesn't seem to show 24h daylight for polar regions
    if (props.api.data.nautical_twilight_end === props.api.data.nautical_twilight_begin) {
        const lat = parseFloat(props.searchInfo.latitude);

        const month = dayjs(props.searchInfo.date).month();

        if (lat >= 0) {
            if (month >= 3 && month <= 8) nightPeriod = 0;
            else nightPeriod = 24;
        } else {
            if ((month >= 0 && month < 3) || (month > 8 && month <= 11)) {
                nightPeriod = 0;
            } else nightPeriod = 24;
        }
    }

    return (
        <div>
            <p>Astronoomiline loojang: {dayjs(props.api.data.astronomical_twilight_end).format("HH:mm")}</p>
            <p>Astronoomiline koidik: {dayjs(props.api.data.astronomical_twilight_begin).format("HH:mm")}</p>
            <p>Öise perioodi pikkus: {Math.floor(nightPeriod)}h {(nightPeriod*60%60).toPrecision(4)}m </p>
        </div>
    );
};

export default DataShower;
