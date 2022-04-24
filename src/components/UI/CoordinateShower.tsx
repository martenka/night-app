import React from 'react';
import styles from "./coordinateShower.module.css";
import {useAppContext} from "../../store/app-context";
import {coordinateFormatter} from "../../utils/utils";

const CoordinateShower = () => {
    const {appData} = useAppContext();

    return (
        <div className={styles.coordinates}>
            <p>Lat: {coordinateFormatter(appData?.searchInfo.latitude)}</p>
            <p>Long: {coordinateFormatter(appData?.searchInfo.longitude)}</p>
        </div>
    );
};

export default CoordinateShower;
