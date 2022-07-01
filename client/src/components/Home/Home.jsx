import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CardsContainer from './CardsContainer/CardsContainer';
import Paged from './Paged/Paged';
import Sidebar from './Sidebar/Sidebar';
import { Container } from './HomeStyles';
import { getAllCountries } from '../../redux/actions/actions';

const Home = () => {
	let dispatch = useDispatch();
	let countries = useSelector((state) => state.countriesReducer.countries);

	useEffect(() => {
		dispatch(getAllCountries());
	}, []);

	useEffect(
		() => dispatch({ type: 'SET_TOTAL_PAGES', payload: countries.length }),
		[countries]
	);

	return (
		<>
			<Navbar button='create'/>
			<Container>
				<Paged />
				<Sidebar />
				<CardsContainer countries={countries} />
			</Container>
		</>
	);
};

export default Home;
