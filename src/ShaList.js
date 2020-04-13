import React from 'react'

class ShaList extends React.Component {
    render() {
        return (
            <ul>
              <li>{this.props.result}</li>
            </ul>
          );
    }
}

export default ShaList