// import React from 'react'

// const Loading = () => {
//   return (
//     <Container>
//       <Image src={earthGif}/>
//     </Container>
//   )
// }

// export default Loading

import React from 'react';
import { Container, Image } from './LoadingStyles';
import earthGif from '../../assets/earth.gif';

const Loading = () => {
	return (
		<Container>
			<Image src={earthGif} />
		</Container>
	);
};

export default Loading;
