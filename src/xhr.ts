
import { AxiosConfig } from './types'
export default function xhr(config: AxiosConfig) {
    // xhr
    const {url, method='get', data=null} = config

    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)

    request.send(data)
}