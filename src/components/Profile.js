import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ isAuthenticated, user }) => {
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Display additional user information */}
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
        
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps)(Profile);
