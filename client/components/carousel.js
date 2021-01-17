import React from 'react'

function Carousel(props) {
  return (
    <div className="blur-bg">
    <div className="carousel-container">
      <div className="carousel-top-row">
        <div className="carousel-header-info">
          <div className="address">{props.data.address}</div>
          <div id="price">${props.data.price}</div>
          <div className="beds-baths">{props.data.beds} Beds, {props.data.bath} Bath</div>
        </div>
        <div className="carousel-main-btns">
          <button className="schedule">Schedule a Tour</button>
          <button className="save">Save</button>
          <button className="share">Share</button>
          <button id="exit-btn" onClick={()=>{ props.setView('carousel') }}>X</button>
        </div>
      </div>

      <div className="current-image">
        <img src={props.data.images[props.currImgIndex].imgUrl}/>
      </div>
      <div className="carousel-nav">
        <div onClick={()=>{props.changecurrImgIndex(1)}}>Next</div>
        <div onClick={()=>{props.changecurrImgIndex(-1)}}>Last</div>
      </div>

      <div className="pagination">{props.currImgIndex + 1} of {props.data.images.length}</div>
    </div>
    </div>

  )
}

export default Carousel