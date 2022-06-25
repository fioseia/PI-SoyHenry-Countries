import React from 'react';
import { Button, Container, Page } from './PagedStyles';

const Paged = () => {
	return (
		<Container>
			<Button>first</Button>
			<Button>previous</Button>
			<Page>1</Page>
			<Page>2</Page>
			<Page>3</Page>
			<Button>next</Button>
			<Button>last</Button>
		</Container>
	);
};

export default Paged;
