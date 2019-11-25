import React from 'react'

export default class HelloMessage extends React.Component {
  render() {
    return (
      <div class="callout primary">
        Hello {this.props.name}
      </div>
    );
  }
}
