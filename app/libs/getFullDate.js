const getFullDate  = (reqestDate) => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = new Date(reqestDate);
    return (`${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}  ${date.getUTCHours()}:${date.getUTCMinutes()}`)
}
export default getFullDate;