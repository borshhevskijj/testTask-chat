
export const transformTime=(time:number)=>{
    if (time <= 9) {
        return `0${time}`
    }
    return time
}