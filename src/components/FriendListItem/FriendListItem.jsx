import PropTypes from 'prop-types';
import styles from './FriendListItem.module.scss';
import styled from 'styled-components';

const Span = styled.span`
background-color: ${props => props.isOnline ? 'green' : 'red'};
`;

const FriendListItem = ({ avatar, name, isOnline}) => {
  return (
    <li className={styles.item}>
      <Span isOnline={isOnline} className={styles.status} />
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;