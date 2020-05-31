let a:number[] = [1, 3]

const b:Array<string> = ['ss','x' ]

let c:ReadonlyArray<number> = [8, 3]



a = c as number[] 
a[1] = 8
// c[0] = 9