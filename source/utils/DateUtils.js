import moment from 'moment'

export const releaseDate = (date) =>{
    let d = new Date(date);
    let monthname =  moment.utc(d).format('MMMM');
    let day = moment.utc(d).format('DD');
    let year = moment.utc(d).format('YYYY');
    return `${day} ${monthname} ${year}`;
}


