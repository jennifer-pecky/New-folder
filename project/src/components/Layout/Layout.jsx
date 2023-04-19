import React from 'react';
import Routers from '../../routes/Routers';
import Navlink from '../Navlinks/Navlink';

const Layout = () => {
  return (
    <>
      <Navlink />
      <div>
        <Routers />
      </div>
    </>
  );
};

export default Layout;
