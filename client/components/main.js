import React from 'react'

function Main(props) {
  return (
    <div className="whole-container">
      <div className="image-container">

      <img className="img-lg" src={props.data.images[0].imgUrl}></img>
      {/* <img className="img-sm" src={props.data.images[1].imgUrl}></img>
      <img className="img-sm" src={props.data.images[2].imgUrl}></img> */}
        <div className="image-overlay">
          <div className="meta">
            <div className="meta-item">FOR SALE</div>
            <div className="meta-item">NEW</div>
          </div>
          <button className="save">Save</button>
          <button className="share">Share</button>
          <button className="img-count">24</button>
        </div>
      </div>

    </div>
  )
}

export default Main