import React from 'react'
import ReactDOM from 'react-dom'
import HelloMessage from './hello'

class Page extends React.Component {
  render() {
    return (
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="large-12 cell">
            <h1>Hello Example</h1>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Page>
    <HelloMessage name='Taylor'/>
  </Page>,
  document.getElementById('page')
);
