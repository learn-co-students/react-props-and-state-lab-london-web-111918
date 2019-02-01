import React from 'react'

class Filters extends React.Component {
  render () {
    const { handleChange, handleClick } = this.props
    // const handleChange = this.props.handleChange //same as above
    // const { handleChange, anotherProp } = this.props // we can get more props like this in future

    return (
      <div className='ui form'>
        <h3>Animal type</h3>
        <div className='field'>
          <select onChange={handleChange} name='type' id='type'>
            <option value='all'>All</option>
            <option value='cat'>Cats</option>
            <option value='dog'>Dogs</option>
            <option value='micropig'>Micropigs</option>
          </select>
        </div>

        <div className='field'>
          <button onClick={handleClick} className='ui secondary button'>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
