import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  padding-top: 30px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  overflow-x: hidden;

  aside {
    margin-left: 24px;
    margin-top: 0;

    @media (min-width: 960px) {
      display: block;
    }

    @media (max-width: 970px) {
      display: none;
    }
  }

  // footer styles
  footer {
    flex: 1 1 auto;
    position: relative;
    width: inherit;
  }
`;

export const AppHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
