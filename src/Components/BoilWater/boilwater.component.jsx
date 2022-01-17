export const WaterBoil =({celsius = 0})=>{
    if(celsius >= 100)
        return "Water is boiling!";
    else if(celsius < 100)
        return "water is not boiling!";
}