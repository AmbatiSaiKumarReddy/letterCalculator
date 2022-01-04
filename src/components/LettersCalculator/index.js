// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    letter: '',
    lettersCount: 0,
  }

  changeLetter = event => {
    const req = event.target.value
    const lengthReq = req.length
    this.setState({letter: req, lettersCount: lengthReq})
  }

  render() {
    const {letter, lettersCount} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <img
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phrase">
                Enter the phrase
              </label>
              <input
                className="input-text"
                id="phrase"
                type="text"
                value={letter}
                placeholder="enter the phrase"
                onChange={this.changeLetter}
              />
            </div>

            <p className="output">No.of letters:{lettersCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
