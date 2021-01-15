import React from 'react'

function Modal(props) {
  console.log()
  return (
    <div>
      <div className="header-btns">
        <div className="a">
          <button className="photos-btn">Photots</button>
          <button className="map-btn">Map</button>
          <button className="street-btn">Street View</button>
          <button className="schools-btn">Schools</button>
          <button className="crime-btn">Crime</button>
          <button className="commute-btn">Commute</button>
          <button className="shop-btn">Shop  Eat</button>
        </div>
        <div className="b">
          <button className="save">Save</button>
          <button className="share">Share</button>
          <button className="exit">X</button>
        </div>
      </div>
      <div className="modal-info">
        <div className="address">{props.data.address}</div>
        <div clasNames="price">{props.data.price}</div>
        <div className="beds-baths">{props.data.beds} Beds, {props.data.bath} Bath</div>
      </div>
      <div className="image-grid">

      </div>
    </div>
  )
}

export default Modal