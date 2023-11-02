import React, { useRef, useState } from 'react'

import "./Editor.scss"
import { useSelector ,useDispatch } from 'react-redux';
import { cssActions, htmlActions, jsActions } from '../reduxstore/reduxhtml';
// import  {addhtmlcode}  from '../reduxstore/reduxhtml';

function Editor() {
    const run=useRef(null);
    const [html,setHtml]=useState(useSelector((state)=>state.reduxhtml.value));
    const [css,setCss]=useState(useSelector((state)=>state.reduxcss.value));
    const[js,setJS]=useState(useSelector((state)=>state.reduxjs.value));
    const dispatch=useDispatch();

const handlerun = async (e) => {
    try {
      (run.current).contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
      (run.current).contentWindow.eval(js);
      dispatch(htmlActions.addhtmlcode(html));
      dispatch(cssActions.addcsscode(css));
      dispatch(jsActions.addjscode(js));
      
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const clearall=()=>{
    dispatch(htmlActions.clear());
    dispatch(cssActions.clear());
    dispatch(jsActions.clear());
    window.location.reload();
  }

  return (
    <div className="editlayout">
        <div className='left'>
            <div className="html"><label>HTML</label><textarea onChange={(e)=>setHtml(e.target.value)} value={html}/></div>
            <div className="css"><label>CSS</label><textarea  onChange={(e)=>setCss(e.target.value)} value={css}/></div>
            <div className="js"><label>JS</label><textarea onChange={(e)=>setJS(e.target.value)} value={js}/></div>
            <div><button onClick={clearall}>clearall</button></div>
        </div>
        <div className="right"><div className="run" onClick={handlerun}>Run</div><iframe title='webbrowser' className='codeeditor' ref={run}></iframe></div>
    </div>
  )
}

export default Editor