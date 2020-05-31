/* 
参数处理
*/

import { isDate, isObject } from './utils'

function encode(url: string): string {
    return encodeURIComponent(url)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/ig, ',')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']')
    .replace(/%20/g, '+')
}

export function buildUrl(url: string, params?: any): string{
    // params需求：无、常规、数组、对象
    // 已存在参数、有#、去除空值、保留部分特殊符号（其他转义、空格变为加号）
    // 数组需要转arr[]=val
    // 对象转json
    // Date使用toISOString函数处理为标准格式
    // 使用? = & 拼接
    if(!params) return url

    // parts用于拼接key=value
    const parts: string[] = []
    Object.keys(params).forEach(key => {
        const val = params[key]
        if(val === null || typeof val === 'undefined') return
        // values用于属性值，不要修改原有的数据！！
        let values = []
        if(Array.isArray(val)) {
            key +='[]'
            values = val
        }
        else {
            // 统一处理为数组，便于后期处理
            values = [val]
        }
        values.forEach(val => {
            // 处理Date
            if(isDate(val)) {
                val = val.toISOString()
            }
            else if(isObject(val)) {
                val = JSON.stringify(val)
            }
            parts.push(`${encode(key)}=${encode(val)}`)
        })
        // 拼接完整url 处理特殊符号（除了规定的符号不转码，其余一律转码）
        const serializedParams = parts.join('&')
        if(serializedParams) {
            // 处理# ？ &
            const markIndex = url.indexOf('#')
            if(markIndex !== -1) {
                url = url.slice(0, markIndex)
            }
            url += (url.indexOf('?') === -1?'?':'&') + serializedParams
        }
    })
    return url
}