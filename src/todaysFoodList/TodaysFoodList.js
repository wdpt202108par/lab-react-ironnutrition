import React from 'react'

class TodaysFoodList extends React.Component {
  render () {
    return(
      <>
        <li>
          {this.props.quantity}{this.props.name} - {this.props.calories * this.props.quantity} cal
        </li>
      </>
    )
  }
}

export default TodaysFoodList;