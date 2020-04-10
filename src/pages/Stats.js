import React, {Suspense,Component } from 'react';
import MenuAppBar from '../components/navbar'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import {Link} from "react-router-dom";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getElements} from '../service'
var data = null
class Stats extends Component
{
    async componentDidMount()
    {
        data = await getElements()
        console.log(data)
      //this.setState({ratings : []})
    }
    render() 
    {    
        var elements = []
        if(data === null || data.length === 0)
        {
            console.log('Waiting')
            //elements.push(<h1>Sorry nothing to show right now. Please come back later</h1>)
        }
        else
        {
            for(var i in data)
            {
                elements.push(
                <TableRow key={data[i].name} key={i}>
                    <TableCell component="th" scope="row" key={i}>
                      {data[i].name}
                    </TableCell>
                    <TableCell align="right" key={i}><Link to={data[i].url} key={i}>Download Link</Link></TableCell>
                    <TableCell align="right" key={i}>{data[i].average_rating}</TableCell>
                    <TableCell align="right" key={i}>{data[i].count}</TableCell>
                  </TableRow>)
            }
        }
        console.log(elements)
        return (
        <div className="App">
            <MenuAppBar/>
            <TableContainer component={Paper}>
                <Table style={{minWidth:650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of Image</TableCell>
                            <TableCell align="right">Average Rating</TableCell>
                            <TableCell align="right">Views</TableCell>
                            <TableCell align="right">Url</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Suspense fallback = {<h1>Loading......</h1>}>
                            {elements}
                        </Suspense>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        );
    }
}
export default Stats;