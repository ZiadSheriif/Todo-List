import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
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
`;
export const ContainerTasks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;
export const Section = styled.div`
  width: 20%;
`;
export const CurrentItem = styled.div`
  display: flex;
  left: 0;
  text-align: center;
  align-items: center;
  margin: 20px 0;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
`;

export const ShapeView = styled.div`
  display: flex;
  left: 0;
  margin: 20px 0 40px 0;
  overflow: auto;
`;
export const ChildView = styled.span`
  padding: 3px;
  color: ${({ theme }) => theme.canvas};
  cursor: pointer;
`;
