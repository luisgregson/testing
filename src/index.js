import React from 'react';
import {render} from 'react-dom';

// Main App component
// gets details from Github and displays them on the page
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      bio: '',
      avatarUrl: '',
    };
  }

  async componentDidMount() {
    const response = await fetch('https://api.github.com/userz/luisgregson');
    const {fullName, bio, avatar_url: avatarUrl} = await response.json();

    this.setState({
      fullName,
      bio,
      avatarUrl,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.fullName}' GitHub page</h1>
        <p>
          <span class="bold">Name:</span> {this.state.fullName}
        </p>
        <p>
          <span class="bold">Biography:</span> {this.state.bio}
        </p>
        <p>
          <span class="bold">Image:</span> {this.state.avatarUrl}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
