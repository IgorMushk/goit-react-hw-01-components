import { styled } from 'styled-components';

export const StatSection = styled.section`
  //width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 15px 2px #000000;
  //box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  background-color: #e7ecf2;
  padding-top: 20px;
`;

export const StatTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 28px;
  text-transform: uppercase;
  color: #626669;
`;

export const StatList = styled.ul`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatListItem = styled.li`
  background-color: ${props => props.color};
  //width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px 20px;
`;

export const StatLabel = styled.span`
  font-size: 18px;
  color: #e7ecf2;
`;

export const StatPercent = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #e7ecf2;
`;
