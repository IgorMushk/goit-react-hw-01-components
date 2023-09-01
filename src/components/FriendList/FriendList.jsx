import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendList } from "./FriendList.styled";

export const FriendsList = ({ friends }) => {
     return (
    <FriendList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendList>
     )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    )
  };
