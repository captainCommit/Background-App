import React, { Component } from 'react';

import MenuAppBar from '../components/navbar'

class About extends Component
{
    
  render() {
    return (
    <div className="App">
        <MenuAppBar/>
        <h1>This is about us </h1>
    </div>
    );
  }
}
export default About;