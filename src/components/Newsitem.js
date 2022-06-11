import React from 'react';

export default function Newsitem({title, description, imageUrl, newsUrl, dateTime}) {
    return (
      <div>
        <div className="card my-3" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"./newspaper.png"} 
          className="card-img-top" alt="..." style={{height:'190px'}}/>
          <div className="card-body">
            <div>
              <h6 className="card-title" style={{overflow: "auto", padding: "5px", textAlign: "justify", textJustify: "inter-word", height: "175px"}}>{title}</h6>
              {/* <h6>{dateTime}</h6> */}
              <hr/>
              <p className="card-text" style={{overflow: "auto", padding: "5px", textAlign: "justify", textJustify: "inter-word", height: "100px"}}>{description}</p>
            </div>
            <a href={newsUrl} rel="noreferrer" target="_blank"  className="btn btn-sm btn-dark mt-3"> {">>"} Read more</a>
          </div>
        </div>
      </div>
    );
}