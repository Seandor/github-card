import PropTypes from 'prop-types'
import React from 'react'
import Card from './Card'

const CardList = (props) => (
  <div>
    { props.profiles.map(profile => <Card key={profile.name} {...profile} />) }
  </div>
)

CardList.propTypes = {
  profiles: PropTypes.array.isRequired
}

export default CardList
