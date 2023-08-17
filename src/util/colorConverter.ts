// Color converter to make HSL code to Hex color

export const hslToHex = (hsl:string): string => {
  // Extracting values from the HSL string
  const regex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/;
  const match = hsl.match(regex);

  if (!match) {
    throw new Error("Invalid HSL color string");
  }

  const hue = parseInt(match[1]);
  const saturation = parseFloat(match[2]);
  const lightness = parseFloat(match[3]);

  // Convert HSL to RGB
  const c = (1 - Math.abs(2 * (lightness * 0.01) - 1)) * (saturation * 0.01);
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = lightness * 0.01 - c * 0.5;

  let red = 0;
  let green = 0;
  let blue = 0;

  if (0 <= hue && hue < 60) {
    red = c;
    green = x;
  } else if (60 <= hue && hue < 120) {
    red = x;
    green = c;
  } else if (120 <= hue && hue < 180) {
    green = c;
    blue = x;
  } else if (180 <= hue && hue < 240) {
    green = x;
    blue = c;
  } else if (240 <= hue && hue < 300) {
    red = x;
    blue = c;
  } else if (300 <= hue && hue < 360) {
    red = c;
    blue = x;
  }

  red = Math.round((red + m) * 255);
  green = Math.round((green + m) * 255);
  blue = Math.round((blue + m) * 255);

  // Convert RGB to hexadecimal
  const hex = `#${(red << 16 | green << 8 | blue).toString(16).padStart(6, '0')}`;
  return hex;
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

