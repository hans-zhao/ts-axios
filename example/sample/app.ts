import axios from '../../src/index'

axios({
    url: '/sample/getx',
    method: 'get',
    params: {
        a: 1
    }
})

axios({
    url: '/sample/gety',
    method: 'get',
    params: {
        foo: ['str', 25]
    }
})

axios({
    url: '/sample/gety',
    method: 'get',
    params: {
        obj: {
            name: 'seeing'
        }
    }
})

axios({
    url: '/sample/gety',
    method: 'get',
    params: {
        date: new Date()
    }
})

axios({
    url: '/sample/gety?age=55#straw',
    method: 'get',
    params: {
        xx: null,
        yy: {
            sex1: undefined
        }
    }
})

const xx = axios({
    url: '/sample/gety',
    method: 'get',
    params: {
        xx: 's$:@ ,$'
    }
})
console.log("xx", xx)
