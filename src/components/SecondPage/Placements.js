import React from 'react'
import './Placements.css'
import { styled } from '@mui/material/styles';
import PlacementOverview from './PlacementOverview';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; // Grid version 1
import c1 from './c1.png'
import c2 from './c2.png'
import c3 from './c3.png'
import c4 from './c4.png'
import c5 from './c5.png'
import c6 from './c6.png'
import c7 from './c7.jpeg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Placements() {
  return (
    <div><h1>PLACEMENTS</h1><br></br><br></br>
         <div className='Placements-parent'>
     <div className='Placements-c1'>
     
    <PlacementOverview/>



     </div>
    <div className='Placements-c2' >

    <Grid container  spacing={8} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={2}>
    <Item> <img  className="companies" src={c1}  alt="" /></Item>
    <Item> <img  className="companies" src={c2}  alt="" /></Item>
  </Grid>
  <Grid xs={1.5}>
    <Item> <img  className="companies" src={c3}  alt="" /></Item>
    <Item> <img  className="companies" src={c4}  alt="" /></Item>
  </Grid>
  <Grid xs={2}>
    <Item> <img  className="companies" src={c5}  alt="" /></Item>
    <Item> <img  className="companies" src={c6}  alt="" /></Item>
    <Item> <img  className="companies" src={c7}  alt="" /></Item>
  </Grid>

</Grid>


</div>
</div>
     </div>

  )
}

export default Placements