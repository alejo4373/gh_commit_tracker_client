import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
const API_BASE_URL = "http://localhost:3100"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commits: []
    }
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
    const { commits } = this.state;
    return (
      <div className="App">
        {
          commits.map(commit =>
            <div className="commit-card">
              <h4 className="username">{commit.username}</h4>
              <p className="repo"><i>{commit.repo}</i></p>
              <p className="message">{commit.message}</p>
              <p className="pushed-at">{(new Date(commit.pushed_at)).toLocaleString()}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
