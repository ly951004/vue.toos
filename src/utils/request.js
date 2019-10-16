import axios from 'axios'

export default function request (url, data, method = 'get') {
    return new Promise((resolve, reject) => {
        let datas = []
        let lang = localStorage['lang'] ? localStorage['lang'] : 'cn'
        if (method === 'get' || method === 'delete') {
            datas = [url, { params: data, headers: { 'Authorization': 'Bearer ' + localStorage['token'], 'lang': lang.toUpperCase() } }]
        } else {
            datas = [url, data, { headers: { 'Authorization': 'Bearer ' + localStorage['token'], 'lang': lang.toUpperCase() } }]
        }
        axios[method](...datas)
            .then(res => {
                resolve(res.data)
            })
            .catch(res => {
                reject(res.data)
            })
            .finally(() => {
            })
    })
}
