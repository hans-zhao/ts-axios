// 索引签名（或者类型断言）

interface SquareConfig {
    color?: string,
    width?: number,
    // 索引签名
    [index: number]: any
}

interface Square {
    color: string,
    area: number
}

function createSquare(config: SquareConfig):SquareConfig {
    let newSquare = {
        color: 'white',
        area: 100
    }
    if(config.color) {
        newSquare.color = config.color
    }
    if(config.width) {
        newSquare.area = Math.pow(config.width, 2) 
    }
// null/ undefined /void是其他类型集合的子集
    // return null || undefined || void
    return newSquare
}

const mySquare = createSquare({1: 'black', width: 50})

console.log("mySquare", mySquare)