import React from "react";

const SearchBox = (props)=>{
    return(
        <div className="col col-sm-4 ">
           <input type="text" 
           className="form-control" 
           value={props.movieSearchValue} 
           onChange={(event)=>props.setMovieSearchValue(event.target.value)}
           placeholder="Type Movie to Search......" />
        </div>
    )
}

export default SearchBox;