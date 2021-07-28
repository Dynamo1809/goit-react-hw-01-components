import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem 
          key={id}
          avatar = {avatar}
          name = {name}
          isOnline = {isOnline}
        />
      ))}     
    </ul>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
  })).isRequired,
};

export default FriendList;