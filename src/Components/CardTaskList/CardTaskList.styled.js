import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  display: flex;
  flex-direction: column;
  height: 128px;
  text-align: center;
  background-color: ${({ theme }) => theme.canvas};
  width: 100%;
  border-radius: 10px;
  padding: 15px;
`;
export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
`;
export const Description = styled.p`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
`;
export const Date = styled.div`
  display: flex;
`;
