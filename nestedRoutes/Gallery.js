import React from "react";
import { Link, Outlet } from "react-router-dom";
function Gallery(props) {
  console.log("props Gallery:",props)
  return (
    <div>
      Gallery Page !.......{props.name}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <hr></hr>
      <Link to='galleryone' state={props.COunt}>Gallery One</Link>
      <Link to='gallerytwo'>Gallery Two</Link>
      <Outlet/>
      
    </div>
  );
}

export default Gallery;
