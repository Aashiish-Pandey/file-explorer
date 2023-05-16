import {useState} from 'react'
function Folder({ explorer }) {
    const[expand,setExpand] = useState(false)
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div className="folder" onClick={()=>setExpand(!expand)}>
          <span>🗂️{explorer.name}</span>
        </div>
        <div style={{display:expand?"block":'none' ,paddingLeft:"25px"}}>
          {explorer.items.map((exp) => (
           <Folder explorer={exp} key ={exp.id}/>
          ))}
             
        </div>
      </div>
    );
  } else {
    return <span className="file">📁{explorer.name}</span>;
  }
}
export default Folder;
