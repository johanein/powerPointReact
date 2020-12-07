import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";
import RichTextEditor from "react-rte";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import styles from "./style.module.css";
import {savePageEditData, savePageAddData} from '../../Redux/actions/pageActions'

const index = memo(({name,content, changeEditValues, addNewValues, homeClicked, editEnabled, addEnabled}) => {
  const history = useHistory();
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const [title, setTitle] = useState();

  useEffect(() => {
if(editEnabled){
    setTitle(name)
    setValue(RichTextEditor.createValueFromString(content, 'html'))
    }
    if(addEnabled){
      setTitle('')
      setValue(RichTextEditor.createValueFromString('', 'html'))
    }
  }, [content, name, editEnabled,addEnabled])

  const onContentChange = (val) => {
    setValue(val)
  };

  const handleHomeClick = () => {
    homeClicked()
    history.push("/");
  }
  
  const handleTitleChange = (e) => {
    const {target:{value}= {}} = e || {}
    setTitle(value)
  }
  
  const handleSaveEditClick = () => {
    const newData = {
      name: title,
      path: title.replace(/\s/g, "").toLowerCase(),
      content: value.toString('html')
    }
    if(editEnabled)changeEditValues(newData)
    if(addEnabled)addNewValues(newData)
    // history.push("/");
  }
  

  return (
    <div className={styles.divStyle}>
      <div className={styles.titleStyle}>
      <label >Page Title</label>
  <input type='text' onChange = {handleTitleChange} value={title}></input>
        </div>
      <div className={styles.editBox}>
      <RichTextEditor value={value} onChange={onContentChange} />
      </div>
      <span className={styles.spanStyle} onClick = {handleHomeClick}>
        <FontAwesomeIcon icon="arrow-left" className={styles.iconStyle} />
      </span>
      <footer className={styles.footerStyle}>
        <span >
      <Button variant="danger" onClick={handleSaveEditClick} disabled = {!editEnabled && !addEnabled}>save page</Button>
      <Button 
      className={styles.buttonStyle} 
      variant="info"
      onClick = {handleHomeClick}
      >back to book</Button>
        </span>
      </footer>
    </div>
  );
});

function mapStateToProps(state, ownprops) {
  const {pageData:{contents = [], selectedPath, editEnabled, addEnabled}={} } = state || {}
const {name,content} = contents.reduce((acc,item)=>{
  const {path: pathInside, name : nameInside, content: contentInside} = item || {}
if(pathInside === selectedPath) return {name:nameInside, content:contentInside}
return acc
},{})
  return {
    name,
    content,
    addEnabled,
    editEnabled
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEditValues: (payload) => dispatch(savePageEditData(payload)),
    homeClicked: ()=> dispatch({type:'HOME_CLICKED'}),
    addNewValues: (payload)=> dispatch(savePageAddData(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);