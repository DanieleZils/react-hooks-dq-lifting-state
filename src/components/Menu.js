import React from "react";


function Menu({handleClick}) {

// function toggleMenu(){
console.log(handleClick)
// }
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={false}
          onChange={() => handleClick()}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
