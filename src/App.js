import React, { Component } from "react";
import CustomNavbar from './components/custom-navbar';

import './App.scss';
import categories from './mock-data/categories'

class App extends Component {
  state = {
    selectedId: null,
  }

  selectId = ( id ) => {
    this.setState( {
      selectedId: id,
    } )
  }

  render() {
    const { categories: categoriesData } = categories
    return(
      <div className="App debug-box">
        <CustomNavbar selectId={this.selectId} categories={categoriesData} />
      </div>
    )
  }
}

export default App;