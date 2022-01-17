export const toCelsius = (temp)=>(
    ((temp-32) *5) /9
)

export const toFarenheit = (celsius)=>(
    ((celsius*9)/5) + 32
)

export const converter=(temparature,toConvert)=>{
    const input = parseFloat(temparature);
    if(isNaN(input))
        return '';
    const  output = toConvert(input);
    const roundedValue = output.toFixed(3);
    return roundedValue;
}