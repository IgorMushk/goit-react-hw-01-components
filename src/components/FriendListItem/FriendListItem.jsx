import PropTypes from 'prop-types';
import { FrendListItem, FrendName, FriendImg, FriendStatus } from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
    //    console.log(avatar, name, isOnline)
    //     <FrendListItem key={id}>
        <FrendListItem >
        {/* <FriendStatus isonline={isOnline}></FriendStatus> */}
        <FriendStatus status={isOnline ? 'true' : 'false'}></FriendStatus>
        <FriendImg
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <FrendName>{name}</FrendName>
      </FrendListItem>
    );
}

FriendListItem.propType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
  