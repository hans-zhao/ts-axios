import { AxiosConfig } from './types'
import xhr from './xhr'
import { buildUrl } from './helpers/url'

function axios(config: AxiosConfig){
    //  todo
    // 处理config的逻辑代码不应该放在xhr.ts/axiosconfig中
    // 因为：这两个是独特的功能模块，而逻辑代码后期会不断修改

    processConfig(config)
    
    xhr(config)
}


function processConfig(config: AxiosConfig): void{
    config.url = transformUrl(config)
}

function transformUrl(config: AxiosConfig): string{
    const { url, params } = config
    return buildUrl(url, params)
}

export default axios