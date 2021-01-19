import React from 'react'

function Modal(props) {
  return (
    <div className="blur-bg">
    <div className="modal-container">

      <div className="header-btns">
        <div className="slider-btns">
          <button className="photos-btn">Photos</button>
          <button className="map-btn">Map</button>
          <button className="street-btn">Street View</button>
          <button className="schools-btn">Schools</button>
          <button className="crime-btn">Crime</button>
          <button className="commute-btn">Commute</button>
          <button className="shop-btn">Shop {'&'} Eat</button>
        </div>
        <div className="main-btns">
          <button className="save">Save</button>
          <button className="share">Share</button>
          <button id="exit-btn" onClick={()=>{ props.setView('modal') }}>X</button>
        </div>
      </div>
      <div className="header-info">
        <div className="address">{props.data.address}</div>
        <div id="price">${props.data.price}</div>
        <div className="beds-baths">{props.data.beds} Beds, {props.data.bath} Bath</div>
      </div>
      <div className="image-grid">
        {props.data.images.map((img, i) => (
          <img src={img.imgUrl} key={i} onClick={()=>{ props.setView('carousel',i) }}/>
        ))
        }
      </div>
    </div>
    </div>
  )
}

export default Modal