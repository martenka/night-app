//https://stackoverflow.com/questions/44058101/typescript-declare-third-party-modules
declare module "@joergdietrich/leaflet.terminator" {
    import {Polygon} from "leaflet";
    export interface Terminator extends Polygon{
        setTime: (date : Date) => {}
    }

    interface TerminatorProps {
        time: string
    }

    export default function terminator(props? : TerminatorProps): Terminator;
}

