import styled from 'styled-components';

export namespace HomeStyle {
  export const Wrapper = styled.div`
    & > section:not(:first-of-type) {
      margin-top: 30px;
    }
  `;
  export const Section = styled.section``;
}
