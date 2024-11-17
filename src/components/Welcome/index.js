import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  textChange = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.textChange()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank You!! Happy Learning</p>
        <button type="button" onClick={this.onSubscribe}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
