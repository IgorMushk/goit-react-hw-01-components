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
    { friends.map(({id, avatar, isOnline, name}) =>(
        <FrendListItem key={id}>
        <FriendStatus isonline={isOnline}></FriendStatus>
        <FriendImg
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <FrendName>{name}</FrendName>
      </FrendListItem>
    ))}
   </FriendList>
    
    //   <FrendListItem>
    //     <FriendStatus></FriendStatus>
    //     <FriendImg
    //       src="https://cdn-icons-png.flaticon.com/512/1998/1998592.png"
    //       alt="User avatar"
    //       width="48"
    //     />
    //     <FrendName>Mango</FrendName>
    //</FrendListItem>

  );
};

//<FriendStatus isOnline={isOnline}></FriendStatus>
//<FriendStatus isonline={isOnline}></FriendStatus>
//<FriendStatus isonline={Boolean(isOnline)}></FriendStatus>
//<FriendStatus isonline={Boolean(0)}></FriendStatus>
//<FriendStatus isonline={isOnline.toString()}></FriendStatus>

//<ul class="friend-list">
//  <!-- Произвольное кол-во FriendListItem -->
//</ul>

//<li class="item">
//  <span class="status"></span>
//  <img class="avatar" src="" alt="User avatar" width="48" />
//  <p class="name"></p>
//</li>


// export const FriendsList = ({ friends }) => {
//     //console.log('friens', friends);
//     return (
//       <FriendList>
//         <FrendListItem>
//           <FriendStatus></FriendStatus>
//           <FriendImg
//             src="https://cdn-icons-png.flaticon.com/512/1998/1998592.png"
//             alt="User avatar"
//             width="48"
//           />
//           <FrendName>Mango</FrendName>
//         </FrendListItem>
//         <FrendListItem>
//           <FriendStatus></FriendStatus>
//           <FriendImg
//             src="https://cdn-icons-png.flaticon.com/512/616/616438.png"
//             alt="User avatar"
//             width="48"
//           />
//           <FrendName>Kiwi</FrendName>
//         </FrendListItem>
//         <FrendListItem>
//           <FriendStatus></FriendStatus>
//           <FriendImg
//             src="https://cdn-icons-png.flaticon.com/512/1623/1623681.png"
//             alt="User avatar"
//             width="48"
//           />
//           <FrendName>Ajax</FrendName>
//         </FrendListItem>
//       </FriendList>
//     );
//   };