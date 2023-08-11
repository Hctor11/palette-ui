// Color converter to make HSL code to Hex color

export const hslToHex = (h: number, s: number, l: number): string => {
    l /= 100;
    
    const a: number = s * Math.min(l, 1 - l)/100
    const rounder = (n: number): string => {
        const k:number = (n + h / 30) % 12
        const color:number = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
        return Math.round(255 * color).toString(16).padStart(2, '0')
    }

    return `#${rounder(0)}${rounder(8)}${rounder(4)}`
}

export const hslToRGB = (h: number, s: number, l: number): string => {
    
    return ''
} 