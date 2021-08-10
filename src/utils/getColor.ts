export const getColor = (value: number) => {
    if (value < 25) return `#ff0000`
    if (value >= 25 && value < 75) return `#ffff00`
    return `#00ff00`
}