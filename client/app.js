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
      carousel: true,
      currImgIndex: 0
    }
    this.changecurrImgIndex = this.changecurrImgIndex.bind(this)
    this.renderView = this.renderView.bind(this)
    this.setView = this.setView.bind(this)
  }

  componentDidMount() {
    $.get('http://localhost:3000/homes/b7jve7muos', (data) => {
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
    this.setState({ currImgIndex: this.state.currImgIndex + num})
  }

  renderView() {
    if (!this.state.modal && !this.state.carousel) {
      return (<Main data={this.state.data} setView={this.setView}/>)
    }
    if (this.state.modal && this.state.carousel) {
      console.log('Carousel loading')
      return (
        <div>
          <Main data={this.state.data} setView={this.setView}/>
          <Modal data={this.state.data} setView={this.setView}/>
          <Carousel data={this.state.data} setView={this.setView} currImgIndex={this.state.currImgIndex} changecurrImgIndex={this.changecurrImgIndex}/>
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
          <Main data={this.state.data} setView={this.setView}/>
          <Carousel data={this.state.data} setView={this.setView} currImgIndex={this.state.currImgIndex}/>
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

$.get('http://localhost:3000/homes/b7jve7muos', (data) => {
  ReactDOM.render(<App data={data}/>, document.querySelector('.app'))
})

