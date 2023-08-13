// Color converter to make HSL code to Hex color

export const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;

  const a: number = (s * Math.min(l, 1 - l)) / 100;
  const rounder = (n: number): string => {
    const k: number = (n + h / 30) % 12;
    const color: number = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };

  return `#${rounder(0)}${rounder(8)}${rounder(4)}`;
};

export const hslToRGB = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;

  let c:number = (1 - Math.abs(2 * l - 1)) * s,
    x:number = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m:number = l - c / 2,
    r:number = 0,
    g:number = 0,
    b:number = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return "rgb(" + r + "," + g + "," + b + ")";
};

