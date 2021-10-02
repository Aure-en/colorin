const randomValue = (): number => Math.floor(Math.random() * 256);

const randomColor = (): string => `rgb(${randomValue()},${randomValue()},${randomValue()})`;

export default randomColor;
