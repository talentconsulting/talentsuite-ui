import moment from "moment";

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTH_NAMES_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


export const dateParse = (dateString:string) => {
    var date = new Date(dateString);
    return `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()} `;
};

export const dateNow = ()=>{
    var date = new Date();
    return dateParse(date.toDateString());
}

export const weekNumber = ()=>{
    return Number(moment().format('W'));
}