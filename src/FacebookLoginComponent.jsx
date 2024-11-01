/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function FacebookLoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '1755045105230180', // Replace with your actual Facebook App ID
        cookie: true,
        xfbml: true,
        version: 'v12.0'
      });
    };

    // Load Facebook SDK script
    (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login(
      (response) => {
        if (response.status === 'connected') {
          fetchUserProfile();
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },
      { scope: 'public_profile,email' }
    );
  };

  const fetchUserProfile = () => {
    window.FB.api('/me', { fields: 'name,email' }, (userInfo) => {
      console.log('User Info:', userInfo);
      setUserName(userInfo.name);
      setIsLoggedIn(true);
    });
  };

  return (
    <>
      {!isLoggedIn ? (
        <button onClick={handleFacebookLogin}>Login with Facebook</button>
      ) : (
        <h2>Welcome {userName}</h2>
      )}
    </>
  );
}

export default FacebookLoginComponent;
