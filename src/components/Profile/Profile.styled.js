import { styled } from 'styled-components';

export const ProfileDiv = styled.div`
  width: 400px;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #e7ecf2;
  border-radius: 4px;
  box-shadow: 0 0 15px 2px #000000;
  padding-top: 40px;
  overflow: hidden;
  transition: scale 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    scale: 0.98;
    cursor: pointer;
  }
`;

export const ProfileDivDescr = styled.div`
  width: 100%;
  //background-color: white;
`;

export const ProfileImg = styled.img`
  background-color: white;
  width: 180px;
  border-radius: 50%;
  margin-top: 40px;
  margin-bottom: 20px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const ProfileUserName = styled.p`
  font-size: 38px;
  font-weight: 600;
  color: #00000;
  margin-top: 0px;
  margin-bottom: 16px;
`;

export const ProfileTag = styled.p`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 26px;
  font-weight: 400;
  text-align: center;
  color: #999999;
`;

export const ProfileLocation = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  color: #999999;
`;

export const ProfileStatsList = styled.ul`
width: 100%;
//width: 400px;
padding: 0;
margin-top: 0;
margin-bottom: 0;
margin-left: 0;
margin-right: 0;
display: flex;
justify-content: space-evenly;
gap 10px;
border: 2px solid lightgrey;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ProfileLabel = styled.span`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #999999;
`;

export const ProfileQuantity = styled.span`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #000000;
`;
