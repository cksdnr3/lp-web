export const palette: Record<Palette, Brightness> = {
  white: {
    [100]: '255, 255, 255',
    [200]: '248, 248, 248',
    [300]: '198, 198, 198',
    [400]: '171, 171, 171',
    [500]: '145, 145, 145',
    [600]: '119, 119, 119',
    [700]: '94, 94, 94',
    [800]: '71, 71, 71',
    [900]: '27, 27, 27',
  },
};
export type Palette = 'white';
export interface Brightness {
  [100]: string;
  [200]: string;
  [300]: string;
  [400]: string;
  [500]: string;
  [600]: string;
  [700]: string;
  [800]: string;
  [900]: string;
}
