import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from '../components/navbar'
import MediaCard from '../components/image'
import selectForDisplay, {applyRating} from '../service'
var images = []

class Home extends Component
{
  async componentDidMount()
  {
    images = await selectForDisplay(10)
    this.setState({elements : selectForDisplay()})
    this.setState({ratings : []})
  }
  onChangeHandler = (e)=>{
    this.setState({rating : this.state.ratings.push({name : e.name,value : e.rating})})
    this.setState({stats : applyRating(this.state.ratings)})
    //console.log(result)
  }
  render() {
    var elements = []
    if(images !== null)
    {
      for(var i in images)
      {
          elements.push(<MediaCard name = {images[i].name} url={images[i].url} title={images[i].name} key ={2} onChangeValue={this.onChangeHandler} count={images[i].count} rating={images[i].average_rating}key={i}></MediaCard>)
      }
    }
    else{
      elements.push(<h1>Sorry nothing to show right now. Please come back later</h1>)
    }
    return (
    <div className="App">
        <MenuAppBar/>
        <Grid container direction="row" justify="center" alignItems="flex-start">
          {elements}
        </Grid>
    </div>
    );
  }
}
export default Home;