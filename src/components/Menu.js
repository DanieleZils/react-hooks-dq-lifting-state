import React from "react";


function Menu() {

// function toggleMenu(){

// }
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={false}
          onChange={(handleClick) => console.log("toggle")}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
