import { useProfileState } from 'contexts/profile_context';
import React from 'react';

const Home = () => {
  const profileState = useProfileState();
  console.log(profileState);
  return <div>home</div>;
};

export default Home;
