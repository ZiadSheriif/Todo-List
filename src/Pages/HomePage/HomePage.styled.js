import styled from "styled-components";
export const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
`;
export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const AppHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const CenterContainer = styled.div`
  position: relative;
  display: inline;
  flex-direction: row;
  width: 60%;
  overflow: auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const ContainerTasks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  overflow: auto;
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Section = styled.div`
  width: 20%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const CurrentItem = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  margin: 20px 0;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ShapeView = styled.div`
  display: flex;
  left: 0;
  margin: 20px 0 40px 0;
  overflow: auto;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export const ChildView = styled.span`
  padding: 3px;
  color: ${({ theme }) => theme.canvas};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.background.viewBtnColor};
  }
  /* :hover {
    background-color: red;
  } */
`;
