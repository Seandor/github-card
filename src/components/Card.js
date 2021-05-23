import PropTypes from 'prop-types'
import React from 'react'

class Card extends React.Component {
  render () {
    const profile = this.props
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  profile: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
  })
}

export default Card
