import './Header.scss'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
const Header = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div className='header'>
           <Link to = '/'>
            <div className='square'></div>
            <div className='square square_second'></div>
            </Link>
            <div className='navbar'>
                <div  className='navbar_item_main'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel className='input_catalog' id="demo-simple-select-standard-label">КАТАЛОГ</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                      
                        <Link className='link' to='/catalog/chair'>  <MenuItem value={10}> Кресла</MenuItem></Link>    
                        <Link className='link' to='/catalog/sofa'>   <MenuItem value={20}>Диваны</MenuItem> </Link> 
                        <Link className='link' to='/catalog/bed'>  <MenuItem value={30}>Кровати</MenuItem> </Link> 
                        <Link className='link' to='/catalog'>  <MenuItem value={40}>Все</MenuItem> </Link> 
                    </Select>
                </FormControl>
                </div>
                <p className='navbar_item'>ДОСТАВКА</p>
                <p className='navbar_item'>ГАРАНТИЯ</p>
                <p className='navbar_last_item'>О НАС</p>
            </div>
        </div>

    )
}
export default Header