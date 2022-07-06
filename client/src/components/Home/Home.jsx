import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CardsContainer from './CardsContainer/CardsContainer';
import Paged from './Paged/Paged';
import Sidebar from './Sidebar/Sidebar';
import { Container, Wrapper } from './HomeStyles';
import { getAllCountries, resetCountryDetail } from '../../redux/actions/actions';
import Loading from '../Loading/Loading';

const Home = () => {
	let dispatch = useDispatch();
	let countries = useSelector((state) => state.countriesReducer.countries);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(getAllCountries());
		setTimeout(() => setLoading(false), 2000);
    dispatch(resetCountryDetail())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(
		() => dispatch({ type: 'SET_TOTAL_PAGES', payload: countries.length }),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[countries]
	);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
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
			)}
		</>
	);
};

export default Home;
