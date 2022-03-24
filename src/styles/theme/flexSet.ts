export const flexSet = ({
  align = 'stretch',
  justify = 'flex-start',
  direction = 'row',
  wrap = 'nowrap',
}: IFlexSet) => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
`;

export interface IFlexSet {
  align?: 'stretch' | 'start' | 'end' | 'center';
  justify?: 'flex-start' | 'start' | 'end' | 'center' | 'space-between';
  direction?: 'column' | 'row';
  wrap?: 'wrap' | 'nowrap';
}
