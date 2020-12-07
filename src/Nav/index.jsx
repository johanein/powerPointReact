import React, { memo } from "react";
// import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import navItems from "./navItems";

const index = memo((props) => {
  
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className="flex-column" >
{navItems.map(({ url, name , path}) => (
          <Nav.Link key={url} href={path} style={{ color: '#61dafb'}} >
            {/* <Link  to={url}> */}
              {name}
            {/* </Link> */}
          </Nav.Link>
        ))}
</Nav>
  );
});

export default index;
