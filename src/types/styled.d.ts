import "styled-components";
import { IFlexSet } from "../styles/theme/flexSet";
declare module "styled-components" {
  export interface DefaultTheme {
    flexSet: (config: IFlexSet) => string;
  }
}
