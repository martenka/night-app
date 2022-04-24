
export const getDataFromLocAndTime = async (latitude: string, longitude: string, date: string) => {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`,{
        method: "GET"
    });
    return await response.json();
}


export const coordinateFormatter = (location: string | undefined) => {
    if (location == null) return "";

    const baseCoord = parseFloat(location);
    const degree = Math.floor(baseCoord);
    const minuteExact = (baseCoord % 1) * 60;
    const minute = Math.floor(minuteExact);
    const second = (minuteExact % 1) * 60;

    return `${degree}° ${minute}' ${second.toFixed(3)}"`;

}

export const dateValidator = (date:string): boolean => {
    const regex = new RegExp("^[0-9][0-9][0-9][0-9]-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$");

    return regex.test(date);
}