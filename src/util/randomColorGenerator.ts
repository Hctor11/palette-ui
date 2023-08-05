const generateRandomColor = (): string => {
    let color: string = "";
    let i: number = 0;
    for (let i = 0; i < 1; i++) {
      const hue = (Math.random() * 360 + (i * 360) / 1) % 360;
      const saturation = 70 + Math.random() * 20;
      const lightness = 50 + Math.random() * 20;

      color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    return color;
};

export default generateRandomColor