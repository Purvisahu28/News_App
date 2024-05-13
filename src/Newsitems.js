import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class Newsitems extends Component {
  // constructor(){
  // super();
  // console.log("hello i am a cnstructor")
  // }
  render() {
    let { title, description, imageUrl, newsUrl, author, date ,source} = this.props;
    return (
      <div className="container my-3">
        <div className="card">
          <div style={{display:'flex',
                 justifyContent:'flex-end',
                    position:'absolute',
                       right:'0'
        }}>
        <span class=" badge rounded-pill bg-danger" >
                {source}
               
              </span>
              </div>
          <img
            src={
              !imageUrl
                ? " https://static.toiimg.com/thumb/msid-107781413,width-1070,height-580,imgsize-17874,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              
            </h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <b>
                By: {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </b>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark custom-border"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
