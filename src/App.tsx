import React, {useMemo, useReducer} from 'react';
import './App.css';
import Header from "./components/General/Header";
import {
    ApiResponseInterface,
    AppActionInterface,
    AppActionTypes,
    AppContext,
    AppDataInterface,
    DataFormState,
    initialAppState
} from "./store/app-context";
import DataShower from "./components/UI/DataShower";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import PositionUpdate from "./components/Wrappers/positionUpdate";

export interface PositionObject {
    latitude: number,
    longitude: number
}

const appReducer = (state : AppDataInterface, action : AppActionInterface) => {

    switch (action.type) {
        case AppActionTypes.ApiResponseChange:
            return {
                ...state,
                api: action.payload as ApiResponseInterface
            }
        case AppActionTypes.SearchDataChange:
            return {
                ...state,
                searchInfo: action.payload as DataFormState
            }
    }
}
//58.37845756789319, 26.726193241544344
function App() {

    const [appState, appDispatch] = useReducer(appReducer, initialAppState);
    const mapLoc : PositionObject = useMemo(() => {
        //TODO Night time is calculated wrongly
        // Location formatter not implemented
        return {
            latitude: appState.searchInfo.latitude !== "" ? parseFloat(appState.searchInfo.latitude) : 58.37845756789319,
            longitude: appState.searchInfo.longitude !== "" ? parseFloat(appState.searchInfo.longitude) : 26.726193241544344,
        }
    }, [appState.searchInfo.latitude,appState.searchInfo.longitude]);
    return (
        <AppContext.Provider value={{appData: appState,appDataDispatch: appDispatch}}>
            <div className="App">
                <Header />
                <main>
                    <MapContainer className={"map-container"} center={[mapLoc.latitude, mapLoc.longitude]} zoom={10} scrollWheelZoom={true}>
                        <PositionUpdate loc={mapLoc}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[mapLoc.latitude, mapLoc.longitude]}>
                                <Popup>
                                    {appState.api.data != null && appState.api.responseReady ? <DataShower data={appState.api.data} /> : <p>No data yet!</p>}
                                </Popup>
                            </Marker>
                        </PositionUpdate>
                    </MapContainer>
                </main>
            </div>
        </AppContext.Provider>

  );
}

export default App;

