import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Page } from './PagedStyles';

const Paged = () => {
	const pagination = useSelector((state) => state.paginationReducer);
	const dispatch = useDispatch();

	return (
		<Container>
			<Button
				active={pagination.current === 1}
				onClick={() => dispatch({ type: 'FIRST_PAGE' })}
			>
				first
			</Button>
			<Button
				active={pagination.current === 1}
				onClick={() => dispatch({ type: 'PREV_PAGE' })}
			>
				previous
			</Button>
			<Page active={pagination.current === 1}>{pagination.current - 1}</Page>
			<Page>{pagination.current}</Page>
			<Page active={pagination.current > pagination.totalPages}>
				{pagination.current + 1}
			</Page>
			<Button
				active={pagination.current > pagination.totalPages}
				onClick={() => dispatch({ type: 'NEXT_PAGE' })}
			>
				next
			</Button>
			<Button
				active={pagination.current > pagination.totalPages}
				onClick={() => dispatch({ type: 'LAST_PAGE' })}
			>
				last
			</Button>
		</Container>
	);
};

export default Paged;
