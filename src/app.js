import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import CardList from './components/CardList'
import Form from './components/Form'
class App extends React.Component {
  state = {
    profiles: []
  }

  addNewProfile = (profile) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profile]
    }))
  }

  render () {
    return (
      <div className="container">
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired
}

ReactDOM.render(<App title="The Github Cards App" />, document.getElementById('app'))
