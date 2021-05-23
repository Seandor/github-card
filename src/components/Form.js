import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'

class Form extends React.Component {
  state = { userName: ''}

  handleSubmit = async (event) => {
    event.preventDefault()
    const { data } = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(data)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => { this.setState({ userName: event.target.value })}}
          placeholder="Github username"
          required
        />
        <button>Add card</button>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form
