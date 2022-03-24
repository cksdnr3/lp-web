export const main = {
  color: (brightness?: Brightness, opacity: number = 1) => {
    switch (brightness) {
      case 'light': {
        return `rgb(247, 47, 51, ${opacity})`;
      }
      case 'lighter': {
        return `rgb(255, 80, 88, ${opacity})`;
      }
      default: {
        return `rgb(216, 12, 24, ${opacity})`;
      }
    }
  },
};

export type Brightness = 'dark' | 'light' | 'lighter';

export interface Main {
  color: (brightness?: Brightness, opacity?: number) => string;
}
