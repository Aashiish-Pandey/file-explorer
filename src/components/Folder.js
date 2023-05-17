import { useState } from "react";
function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  const [showInput, setShowInput] = useState({
    visible: true,
    isFolder: null,
  });

  const handleNewFolder = (event, isFolder) => {
    event.stopPropagation();
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder =(event)=>{
    if(event.keyCode===13 && event.target.value) {
        // add logic
        setShowInput({...showInput,visible:false})
    }
  }
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>🗂️{explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>Files +</button>
          </div>
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "🗂️" : "📁"}</span>
              <input
              onKeyDown={(event)=>{
                onAddFolder(event)

              }}
                type="text"
                className="inputContainer_input"
                autoFocus
                onBlur={() => {
                  setShowInput({ ...showInput, visible: false });
                }}
              />
            </div>
          )}
          {explorer.items.map((exp) => (
            <Folder explorer={exp} key={exp.id} />
          ))}
             
        </div>
      </div>
    );
  } else {
    return <span className="file">📁{explorer.name}</span>;
  }
}
export default Folder;
