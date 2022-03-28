import 'styled-components';
import { Device } from 'src/styles/theme/media';
import { IFlexSet } from '../styles/theme/flexSet';
import { Brightness, Main } from 'src/styles/theme/main';
import { Palette } from 'src/styles/theme/palette';
declare module 'styled-components' {
  export interface DefaultTheme {
    flexSet: (config: IFlexSet) => string;
    media: Record<Device, any>;
    main: Main;
    palette: Recrod<Palette, Brightness>;
    sizes: Record<Device, number>;
  }
}
