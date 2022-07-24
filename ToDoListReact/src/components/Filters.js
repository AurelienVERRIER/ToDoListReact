import React, { Component } from 'react'
class Filters extends Component {
  render() {
    const { setFilter } = this.props
    return (
      <div>
        <h1>Filters</h1>
        <div className=''>
          <button type='button' className='' onClick={() => setFilter('')}>All</button>
          <button type='button' className='' onClick={() => setFilter('To do')}>To do</button>
          <button type='button' className='' onClick={() => setFilter('Doing')}>Doing</button>
          <button type='button' className='' onClick={() => setFilter('Done')}>Done</button>
        </div>
      </div>
    )}
}

export default Filters