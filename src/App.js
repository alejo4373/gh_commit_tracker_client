import React, { Component } from 'react';
import axios from 'axios';
const API_BASE_URL = "http://localhost:3100"

class App extends Component {
  constructor(props) {
    super(props)
    this.commits = []
  }

  componentDidMount() {
    this.getPushedCommits();
  }

  async getPushedCommits() {
    try {
      let { data } = await axios.get(`${API_BASE_URL}/commits`)
      this.setState({
        commits: data.payload
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.commits.map(commit =>
            <div>
              {commit.sha}
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
