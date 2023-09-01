import PropTypes from 'prop-types';
import './Profile.styled';
import {
  ProfileDiv,
  ProfileDivDescr,
  ProfileImg,
  ProfileLabel,
  ProfileLocation,
  ProfileQuantity,
  ProfileStatsItem,
  ProfileStatsList,
  ProfileTag,
  ProfileUserName,
} from './Profile.styled';
import { thousandSeparator } from 'js/thousandSeparato';

export const Profile = ({avatar,username,tag,location,stats}) => {
  //console.log('user', user);
  return (
    <ProfileDiv>
      <ProfileDivDescr>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileUserName>{username}</ProfileUserName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDivDescr>

      <ProfileStatsList>
        <ProfileStatsItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{stats.followers}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{thousandSeparator(stats.views)}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{stats.likes}</ProfileQuantity>
        </ProfileStatsItem>
      </ProfileStatsList>
    </ProfileDiv>
  );
};

Profile.protoType ={
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        links: PropTypes.number.isRequired,
    }).isRequired,
};


// username — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — ссылка на изображение
// stats — объект с информацией об активности

// export const Profile = user => {
//   return (
//     <div class="profile">
//       <div class="description">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//           alt="User avatar"
//           class="avatar"
//         />
//         <p class="name">Petra Marica</p>
//         <p class="tag">@pmarica</p>
//         <p class="location">Salvador, Brasil</p>
//       </div>

//       <ul class="stats">
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">1000</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">2000</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">3000</span>
//         </li>
//       </ul>
//     </div>
//   );
// };
