/**
 * Fetches data from sunset API
 * @param latitude - Coordinate in decimal format
 * @param longitude - Coordinate in decimal format
 * @param date - Date in one of the format sunset API allows. This app uses YYYY-MM-DD format.
 */
export const getDataFromLocAndTime = async (latitude: string, longitude: string, date: string) => {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`,{
        method: "GET"
    });
    return await response.json();
}

/**
 * Formats decimal coordinates into degrees-minutes-seconds <br/>
 * Seconds are shown with three decimals places of precision.
 * @param location
 */
export const coordinateFormatter = (location: string | undefined) => {
    if (location == null) return "";

    const baseCoord = parseFloat(location);
    const degree = Math.floor(baseCoord);
    const minuteExact = Math.abs((baseCoord % 1) * 60);
    const minute = Math.floor(minuteExact);
    const second = (minuteExact % 1) * 60;

    return `${degree}° ${minute}' ${second.toFixed(3)}"`;

}

/**
 * Gets the date/time to use. If both mainDate and fallback props are invalid then current local datetime is used
 * @return Date string to use
 */
export const getTimeToUse = (mainDate: Date | string | undefined, fallback: string | undefined) => {
    if (mainDate) return mainDate.toString();
    if (fallback == null) return new Date().toString();

    const today = new Date();
    let timeToUse = new Date(fallback);
    if (timeToUse.toString() === "Invalid Date") {
        timeToUse = today;
        timeToUse.setHours(today.getHours(),today.getMinutes());
    }

    return timeToUse.toString();
}

/**
 * Validates the date with regex
 */
export const dateValidator = (date:string): boolean => {
    if (date == null) return false;
    const regex = new RegExp("^([0-9][0-9][0-9][0-9]-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])( ([0-1][0-9]|2[0-3]):[0-5][0-9])?)?$");

    return regex.test(date.trim());
}

/**
 *
 * @param loc
 * @param mode
 * @return Parsed location in decimal or "NaN" on invalid input
 */
export const locationParser = (loc: string, mode: "LAT" | "LONG"): string | "NaN" => {
    //Checks if location is a decimal number
    if (loc == null) return "NaN";
    const trimmedLoc = loc.trim();
    if(trimmedLoc.match("^-?\\d+(\\.\\d+)?$") == null) return "NaN";
    const parsedLoc = parseFloat(loc);

    return mode === "LONG" ? (parsedLoc % 360) + "" : (parsedLoc % 90) + "";
}