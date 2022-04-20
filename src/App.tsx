import React, {useReducer} from 'react';
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

function App() {

    const [appState, appDispatch] = useReducer(appReducer, initialAppState);

    return (
        <AppContext.Provider value={{appData: appState,appDataDispatch: appDispatch}}>
            <div className="App">
                <Header />
                <main>
                    {appState.api.data != null && appState.api.responseReady ? <DataShower data={appState.api.data} /> : <p>No data yet!</p>}
                </main>
            </div>
        </AppContext.Provider>

  );
}

export default App;

