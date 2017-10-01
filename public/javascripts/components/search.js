import React from 'react'

export default class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      search: ""
    }
  }

  render() {
    return (
      <div className="search-component">
        <h1></h1>
        <input type="text" onChange={this.changeSearch.bind(this)} />
        <p><span>You are searching for: {this.state.search}</span></p>
      </div>
    )
  }

  changeSearch(event) {
    const text = event.target.value

    this.setState({
      search: text
    })
  }
}
