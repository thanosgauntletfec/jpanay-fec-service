import React from 'react'

function Modal(props) {
  return (
    <div className="blur-bg">
    <div className="modal-container">
      <div className="header-btns">
        <div className="slider-btns">
          <button className="photos-btn" id="selected-btn">Photos</button>
          <button className="map-btn">Map</button>
          <button className="street-btn">Street View</button>
          <button className="schools-btn">Schools</button>
          <button className="crime-btn">Crime</button>
          <button className="commute-btn">Commute</button>
          <button className="shop-btn">Shop {'&'} Eat</button>
        </div>
        <div className="main-btns">
          <button className="save" id="modal-like">
          <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z"></path></svg>
            Save
          </button>
          <button className="share"  id="modal-share">
          <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z"></path></svg>
            Share
          </button>
          <div className="exit-btn-div" onClick={()=>{ props.setView('modal') }}>
            <svg className="svg exit-btn" id="modal-exit" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z"></path></svg>
          </div>
        </div>
      </div>
      <div className="header-info">
        <div className="address">{props.data.address}</div>
        <div className="divider">|</div>
        <div id="price">${props.data.price}</div>
        <div className="divider">|</div>
        <div className="beds-baths">{props.data.beds} Bed {props.data.bath} Bath</div>
      </div>
      <div className="modal-body">
        <div className="image-grid">
          {props.data.images.map((img, i) => (
            <img src={img.imgUrl} id={'img'+i} key={i} onClick={()=>{ props.setView('carousel',i) }}/>
          ))
          }
        </div>
        <div className="schedule-bar">
          <img src="http://localhost:3000/media/schedule.png"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modal