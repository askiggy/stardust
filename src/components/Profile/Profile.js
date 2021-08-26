import React from 'react';
import PropTypes from 'prop-types';

function Profile({ user }) {
  return (
    <div className='profile'>
      <img
        src={user.picture}
        title={user.name}
        alt={user.name}
        className='profilePicture'
      />
      <div className='profileName'>{user.name}</div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string
  }).isRequired
};

export default Profile;
