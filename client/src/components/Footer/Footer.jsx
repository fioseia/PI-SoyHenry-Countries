// import React from 'react'

// const Footer = () => {
//   return (
//     <div style={{bottom:0}}>By FS</div>
//   )
// }

// export default Footer

import React, { Component } from 'react'
import { Container, Icon, Link, Paragraph } from './FooterStyles';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

export class Footer extends Component {

  render() {
    return (
      <Container>
        <Paragraph>Developed by Fiorenza Seia - </Paragraph>
        <Link href="https://www.linkedin.com/in/fiorenza-seia-a79700217/"><Icon src={linkedin} alt="" /></Link>
        <Link href="https://github.com/fioseia"><Icon src={github} alt="" /></Link>
      </Container>
    )
  }
}

export default Footer