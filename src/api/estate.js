// import api from './index'
// import { axios } from '@/utils/request'

// export function oneStep(params) {
//    return axios({
//        url: api.oneStep,
//        method: 'get',
//        data: params
//    })
// }

import { axios } from '@/utils/request'

export function selectCompany() {
    return axios({
        url: '/estate/selectCompany',
        method: 'get'
    })
}

export function insertEstate(parameter) {
    return axios({
        url: '/estate/insertEstate',
        method: 'post',
        data: parameter
    })
}

export function selectBuilding(parameter) {
    return axios({
        url: '/estate/selectBuilding',
        method: 'post',
        data: parameter
    })
}

export function updateBuilding(parameter) {
    return axios({
        url: '/estate/updateBuilding',
        method: 'post',
        data: parameter
    })
}
