import React from "react";

function SearchBox(props) {
  return (
    <div className="col col-sm-4 ">
      <input
        className="form-container"
        value={props.value}
        placeholder="Type to search"
        onChange={(event) => props.setValue(event.target.value)}
      ></input>
    </div>
  );
}

export default SearchBox;
