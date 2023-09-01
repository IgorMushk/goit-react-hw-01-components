import {
  FrendListItem,
  FrendName,
  FriendImg,
  FriendList,
  FriendStatus,
} from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  //console.log('friens', friends);
  return (
    <FriendList>
      <FrendListItem>
        <FriendStatus></FriendStatus>
        <FriendImg
          src="https://cdn-icons-png.flaticon.com/512/1998/1998592.png"
          alt="User avatar"
          width="48"
        />
        <FrendName>Mango</FrendName>
      </FrendListItem>
      <FrendListItem>
        <FriendStatus></FriendStatus>
        <FriendImg
          src="https://cdn-icons-png.flaticon.com/512/616/616438.png"
          alt="User avatar"
          width="48"
        />
        <FrendName>Kiwi</FrendName>
      </FrendListItem>
      <FrendListItem>
        <FriendStatus></FriendStatus>
        <FriendImg
          src="https://cdn-icons-png.flaticon.com/512/1623/1623681.png"
          alt="User avatar"
          width="48"
        />
        <FrendName>Ajax</FrendName>
      </FrendListItem>
    </FriendList>
  );
};

//<ul class="friend-list">
//  <!-- Произвольное кол-во FriendListItem -->
//</ul>

//<li class="item">
//  <span class="status"></span>
//  <img class="avatar" src="" alt="User avatar" width="48" />
//  <p class="name"></p>
//</li>
