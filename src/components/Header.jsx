import React from 'react'
import {AppBar , Toolbar, styled} from '@mui/material'
import logo from '../head_img.png';
const Container = styled(AppBar)`
    background:#060606;
    height:9vh;
`
const Header = () => {
  return (
    <div>
      <Container position='static'>
        <Toolbar>
            <img src={logo} alt='logo' style={{width:40}}/>
            <h3 style={{paddingLeft: 4}}>Code-First</h3>
        </Toolbar>
      </Container>
    </div>
  )
}

export default Header
