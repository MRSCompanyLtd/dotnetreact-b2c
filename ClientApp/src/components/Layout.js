import React from 'react';
import NavMenu from './NavMenu';

const Layout = (props) => {

    return (
      <div>
        <NavMenu />
          {props.children}
      </div>
    )
}

export default Layout;