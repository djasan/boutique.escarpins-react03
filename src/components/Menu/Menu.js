// Menu.js

import React from 'react';
import './Menus.css';

const Menu = (props) => {
  return (
    <div className="Menu">
      <div className="MenuItems" onClick={props.handleDisplayPanier}>
        Afficher le Panier
      </div>
    </div>
  );
};

export default Menu;

