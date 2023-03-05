import styled from 'styled-components';

export const FoodsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  margin-top: -140px;

  padding: 40px 0;
`;
