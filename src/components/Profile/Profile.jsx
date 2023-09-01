import PropTypes from 'prop-types';
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
