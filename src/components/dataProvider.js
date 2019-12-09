import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://192.168.86.51:4040/api';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {
        const url = `${apiUrl}/${resource}`
        console.log('url',url)
        const rows = httpClient(url)
            .then((rows)=>{
                console.log(rows)
                return(rows)
            })
            .then(({headers, json}) => {
                console.log(headers, json);
                return ({
                data: json,
                total: json.length,
            })})
        console.log(rows)
        return(rows)
    }
};