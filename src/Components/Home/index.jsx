import React, { memo } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router-dom";
import styles from './style.module.css'

const index = memo(({ name, content, editValues, addValues } ) => {
  const history = useHistory();
  const onEditClick = () => {
    editValues()
    history.push("/editOrAdd");
  }
  const onAddClick = (params) => {
    addValues()
    history.push("/editOrAdd");
  }
  
  
  return (
    <div className = {styles.divStyle}>
      <header >
        <h1 className = {styles.headerStyle}>{name}</h1>
        <span className = {styles.spanStyle} onClick ={onEditClick}>
        <FontAwesomeIcon icon="edit" className = {styles.iconStyle}/>
          </span>
      </header>
      <div className = {styles.bodyStyle} dangerouslySetInnerHTML={{__html:content}} />
      <footer className = {styles.footerStyle}>
        Add new page
        <span className = {styles.spanStyle} onClick = {onAddClick}>
        <FontAwesomeIcon icon="plus" className = {styles.iconStyleSmall}/>
        </span>
      </footer>
    </div>
  );
});

function mapStateToProps(state) {
  const {pageData:{contents = [], selectedPath}={} } = state || {}
const {name,content} = contents.reduce((acc,item)=>{
  const {path: pathInside, name : nameInside, content: contentInside} = item || {}
if(pathInside === selectedPath) return {name:nameInside, content:contentInside}
return acc
},{})
  return {
    name,
    content
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    editValues: () => dispatch({type:'EDIT_ENABLED'}),
    addValues: () => dispatch({type:'ADD_ENABLED'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
