import { styled } from "styled-components";

export const FrendListItem = styled.li`
  display: flex;
  align-items: center;
  //justify-content: space-between;
  width: 360px;
  padding: 10px 20px;
  //margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: 0 0 10px 2px #000000;
  background-color: #e7ecf2;
  transition: scale 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`;

export const FriendStatus = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  border-radius: 100px;
  //background-color: #00ff00;
  background-color: ${props => (props.status === 'true' ? '#00ff00' : '#ff0000')};
`;
//background-color: ${props => (props.isonline ? '#00ff00' : '#ff0000')};
// export const FriendStatus = styled('span')({
//     width: '24px',
//     height: '24px',
//     marginRight: '16px',
//     borderRadius: '100px',
//     backgroundColor: ({isonline}) => `${isonline ? '#00ff00' : '#ff0000'}`,
// });

export const FriendImg = styled.img`
  width: 50px;
`;

export const FrendName = styled.p`
  margin-top: 0;
  margin-right: 0px;
  margin-bottom: 0;
  margin-left: 10px;
  width: 60px;
  font-size: 20px;
  font-weight: 600;
`;
