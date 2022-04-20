
export const getDataFromLocAndTime = async (latitude: string, longitude: string, date: string) => {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}`,{
        method: "GET"
    });
    return await response.json();
}

export const coordinateValidator = (coordinate:string) => {

}


export const dateValidator = (date:string): boolean => {
    const regex = new RegExp("^[0-9][0-9][0-9][0-9]-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$");

    return regex.test(date);
}