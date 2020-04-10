import React from 'react'

class ShaList extends React.Component {
    render() {
        return (
            <ul>
              <li>{this.props.words}</li>
            </ul>
          );
    }
}

export default ShaList