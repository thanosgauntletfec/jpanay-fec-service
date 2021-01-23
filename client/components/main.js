import React from 'react'

function Main(props) {
  return (
    <div className="main-container">
      <div className="top-row">
        <div className="meta">
          <div className="meta-item for-sale">FOR SALE</div>
          {/* <div className="meta-item">NEW</div> */}
        </div>
        <div className="main-btns" id="main-btns">
        <button id="save">
          <svg className="svg" id="like-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z"></path></svg>
            Save
          </button>
          <button id="share">
          <svg className="svg" id="share-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z"></path></svg>
            Share
          </button>
        </div>
      </div>
      <div className="image-container" onClick={() => { props.setView('modal') }}>
        <img className="main-img-1" src={props.data.images[0].imgUrl} ></img>
        <div className="mini-img-container">
        <img className="main-img-2" src={props.data.images[1].imgUrl} ></img>
        <img className="main-img-3" src={props.data.images[2].imgUrl} ></img>
        </div>
      </div>

      <div className="img-count">
        <button>
        <svg className="svg img-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M6.65 20.335l4.305-4.784 3.519 3.22 5.949-7.848 4.847 8.143V6.65H6.65v13.685zm0 3.976v.959h18.62v-1.003l-5.113-8.59-5.326 7.027-3.693-3.38-4.488 4.987zM27.93 3.99v23.94H3.99V3.99h23.94zM13.965 13.3a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99z"></path></svg>
          <span id="img-count">{props.data.imageCount}</span>
          </button>
      </div>
    </div>
  )
}

export default Main