import React, { memo } from "react";
// import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { connect } from 'react-redux'
import {saveSelectedTopic} from '../Redux/actions/pageActions'
import styles from './style.module.css'


const index = memo(({contents, saveSelectedPath}) => {
  const handleClick = (selectedPath) => () => {
    saveSelectedPath(selectedPath)
  }
  
  return (
    <Nav id = {styles.navStyle} variant="tabs" defaultActiveKey="/home" className="flex-column" >
{contents.map(({ url, name , path}) => (
          <Nav.Link key={url} id = {styles.navLinkStyle} onClick = {handleClick(path)}>
            {/* <Link  to={url}> */}
              {name}
            {/* </Link> */}
          </Nav.Link>
        ))}
</Nav>
  );
});

function mapStateToProps(state, ownprops) {
  return {
    contents: state.pageData.contents,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveSelectedPath: ( selectedPath) =>
      dispatch(saveSelectedTopic( selectedPath )),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(index);
