// 自定义一个类型字面量
export type Method = 'get' | 'post' | 'delete' | 'put' | 'patch'

export interface AxiosConfig {
    url: string,
    method?:Method,
    params?:any,
    data?:any
}