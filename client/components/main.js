import React from 'react'

function Main(props) {
  return (
    <div className="main-container">
      <div className="top-row">
        <div className="meta">
          <div className="meta-item for-sale">FOR SALE</div>
          {/* <div className="meta-item">NEW</div> */}
        </div>
        <div className="main-btns">
          <button className="save trulia-btn">Save</button>
          <button className="share trulia-btn">Share</button>
        </div>
      </div>
      <div className="image-container" onClick={() => { props.setView('modal') }}>
        <img className="img-lg" src={props.data.images[0].imgUrl}></img>
      </div>

      <div className="img-count">
        <button>{props.data.imageCount}</button>
      </div>
    </div>
  )
}

export default Main