
import Api from './Api';
import axios from 'axios'

export function getHomeData(params) {
    return axios.get(Api.HOME_LIST_DATA+params)  
}