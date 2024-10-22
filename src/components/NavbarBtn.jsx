import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBtn = (props) => {
  return (
    <Link to={props.btnLink} target={props.targetblank ? "_blank" : "_self"} className='w-100'>
    <button className={props.className}>
      {props.btnText}
      <span>
        <i className={props.icon}></i>
      </span>
    </button>
    </Link>
  );
};

export default NavbarBtn;
