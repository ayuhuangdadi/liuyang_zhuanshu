import request from '../plugin/axios'

export function getLunBoImg(data){
    return request({
        // api地址
        url:'./',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getFoterLogo(data){
    return request({
        // api地址
        url:'/Logo',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getMainList(data){
    return request({
        // api地址
        url:'/Main',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getmainlist(data){
    return request({
        // api地址
        url:'/mainlist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getTabList(data){
    return request({
        // api地址
        url:'/tabList',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getNavList(data){
    return request({
        // api地址
        url:'/navlist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getTbaList(data){
    return request({
        // api地址
        url:'/tablist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getTabsList(data){
    return request({
        // api地址
        url:'/tabslist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getkjNavList(data){
    return request({
        // api地址
        url:'/kjnavlist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getketinglist(data){
    return request({
        // api地址
        url:'/ketinglist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getwoshilist(data){
    return request({
        // api地址
        url:'/woshilist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getchufanglist(data){
    return request({
        // api地址
        url:'/chufanglist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getweishenglist(data){
    return request({
        // api地址
        url:'/weishenglist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getyangtailist(data){
    return request({
        // api地址
        url:'/yangtailist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getquanwulist(data){
    return request({
        // api地址
        url:'/quanwulist',
        // 请求方法
        method:'get',
        data:data
    })
}
export function getGongYiList(data){
    return request({
        // api地址
        url:'/GongYiList',
        // 请求方法
        method:'get',
        data:data
    })
}
export function jianlist(data){
    return request({
        // api地址
        url:'/jianlist',
        // 请求方法
        method:'get',
        params:data
    })
}
