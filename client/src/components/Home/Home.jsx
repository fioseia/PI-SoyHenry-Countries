import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CardsContainer from './CardsContainer/CardsContainer';
import Paged from './Paged/Paged';
import Sidebar from './Sidebar/Sidebar';
import { Container, Wrapper } from './HomeStyles';
import { getAllCountries } from '../../redux/actions/actions';

const Home = () => {
	let dispatch = useDispatch();
	let countries = useSelector((state) => state.countriesReducer.countries);

	useEffect(() => {
		dispatch(getAllCountries());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(
		() => dispatch({ type: 'SET_TOTAL_PAGES', payload: countries.length }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
		[countries]
	);

	return (
		<>
			<Navbar button='create' />
			<Container>
				<Sidebar />
				<Wrapper>
					<Paged />
					<CardsContainer countries={countries} />
				</Wrapper>
			</Container>
		</>
	);
};

export default Home;
