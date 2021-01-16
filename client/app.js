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
      modal: false,
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
      return (
        <div>
          <Main data={this.state.data} setView={this.setView}/>
          <Modal data={this.state.data} setView={this.setView}/>
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

