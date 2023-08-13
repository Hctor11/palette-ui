import generateRandomColor from "./randomColorGenerator";

const generatePalette = (numColors: number):Array<string> => {
    let colors = []
    for(let i = 0; i < numColors; i++){
        colors.push(generateRandomColor())
    }
    return colors
}

export default generatePalette