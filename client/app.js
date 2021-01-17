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
      carousel: false
    }

    this.renderView = this.renderView.bind(this)
    this.setView = this.setView.bind(this)
  }

  componentDidMount() {
    $.get('http://localhost:3000/homes/b7jve7muos', (data) => {
      // console.log(data)
      this.setState({data: data})
    })
  }

  setView(view) {
    if (view === 'modal') {
      this.setState({modal: !this.state.modal})
    }
    if (view === 'carousel') {
      this.setState({carousel: !this.state.carousel})
    }
  }

  renderView() {
    if (!this.state.modal && !this.state.carousel) {
      // $('.app').css('filter', 'blur(0px)')
      // $('.app').css('-webkit-filter', 'blur(0px)')
      return (<Main data={this.state.data} setView={this.setView}/>)
    }
    if (this.state.modal && this.state.carousel) {
      return (
        <div>
          <Main data={this.state.data} setView={this.setView}/>
          <Modal data={this.state.data} setView={this.setView}/>
          <Carousel data={this.state.data} setView={this.setView}/>
        </div>
      )
    }
    if (this.state.modal) {
      // $('body').css('filter', 'blur(8px)')
      // $('body').css('-webkit-filter', 'blur(8px)')
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
          <Carousel data={this.state.data} setView={this.setView}/>
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

