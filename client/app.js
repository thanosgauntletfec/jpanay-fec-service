import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Main from './components/main'
import Modal from './components/modal'
import Carousel from './components/carousel'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      modal: true,
      carousel: false,
      currImgIndex: 0
    }
    this.changecurrImgIndex = this.changecurrImgIndex.bind(this)
    this.renderView = this.renderView.bind(this)
    this.setView = this.setView.bind(this)
  }

  componentDidMount() {
    $.get('/homes/w93fnhlkoj', (data) => {
      // console.log(data)
      this.setState({data: data})
    })
  }

  setView(view, currImgIndex = 0) {
    if (view === 'modal') {
      this.setState({modal: !this.state.modal})
    }
    if (view === 'carousel') {
      this.setState({
        carousel: !this.state.carousel,
        currImgIndex: currImgIndex
      })
    }
  }

  changecurrImgIndex(num) {
    console.log()
    if (this.state.currImgIndex + num === this.state.data.images.length) {
      this.setState({ currImgIndex: 0})
    } else if (this.state.currImgIndex + num < 0) {
      this.setState({ currImgIndex: this.state.data.images.length-1})
    } else {
      this.setState({ currImgIndex: this.state.currImgIndex + num})
    }

  }

  renderView() {
    if (!this.state.modal && !this.state.carousel) {
      return (<Main data={this.state.data} setView={this.setView}/>)
    }
    if (this.state.modal && this.state.carousel) {
      return (
        <div>
          <Carousel data={this.state.data} setView={this.setView} currImgIndex={this.state.currImgIndex} changecurrImgIndex={this.changecurrImgIndex}/>
          <Modal data={this.state.data} setView={this.setView}/>
          <Main data={this.state.data} setView={this.setView}/>
        </div>
      )
    }
    if (this.state.modal) {
      return (
        <div>
          <Modal data={this.state.data} setView={this.setView}/>
          <Main data={this.state.data} setView={this.setView}/>
        </div>
      )
    }
    if (this.state.carousel) {
      return (
        <div>
          <Carousel data={this.state.data} setView={this.setView} currImgIndex={this.state.currImgIndex} changecurrImgIndex={this.changecurrImgIndex}/>
          <Main data={this.state.data} setView={this.setView}/>
        </div>
      )
    }

  }

  render() {
    return (
      <div>
        {this.renderView(this.state.data)}
      </div>
    )
  }
}

$.get('/homes/w93fnhlkoj', (data) => {
  ReactDOM.render(<App data={data}/>, document.querySelector('.app'))
})

