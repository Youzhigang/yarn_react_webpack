import React, {Component} from 'react'
var FontAwesome = require('react-fontawesome');

class Test extends Component {
    render () {
        return (
             <FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      >12312321312312312312312</FontAwesome>
        )
    }
}

export default Test