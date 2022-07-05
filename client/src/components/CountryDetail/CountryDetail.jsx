import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCountryDetails } from '../../redux/actions/actions';
import Navbar from '../Navbar/Navbar';
import {
	ActivitiesContainer,
	ActivityCard,
	ActivityCardIcon,
	ActivityCardInfo,
	ActivityCardInfoItem,
	Container,
	Flag,
	Info,
	InfoItem,
	Maincontainer,
	Name,
	Wrapper,
} from './CountryDetailStyles';

const CountryDetail = () => {
	const dispatch = useDispatch();
	const country = useSelector((state) => state.countriesReducer.country);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getCountryDetails(id));
	}, [id]);

	const numberWithCommas = (x) => {
		var parts = x.toString().split('.');
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		return parts.join('.');
	};

	return (
		<Maincontainer>
			<Navbar button='home' />
			<Container>
				<Wrapper>
					<Flag src={country.image} />
					<Name>
						{country.name} - {country.id}
					</Name>
				</Wrapper>
				<Wrapper>
					<Info>
						<InfoItem>Continent: {country.continent}</InfoItem>
						<InfoItem>
							Subregion: {country.subregion ? country.subregion : '-'}
						</InfoItem>
						<InfoItem>Capital: {country.capital}</InfoItem>
						<InfoItem>
							Population:{' '}
							{country.population ? numberWithCommas(country.population) : '0'}{' '}
							per
						</InfoItem>
						<InfoItem>Area: {country.area}</InfoItem>
					</Info>
					<ActivitiesContainer>
						{country.activities && country.activities.length ? (
							country.activities.map((act) => (
								<ActivityCard
									key={act.id}
									bg={
										act.categories === 'Night Life'
											? 'night'
											: act.categories.toLowerCase()
									}
								>
									<ActivityCardIcon
										icon={
											act.categories === 'Night Life'
												? 'night'
												: act.categories.toLowerCase()
										}
									></ActivityCardIcon>
									<ActivityCardInfo>
										<ActivityCardInfoItem type={'title'}>
											{act.name}
										</ActivityCardInfoItem>
										<ActivityCardInfoItem type={'title'}>
											{act.subcategories}
										</ActivityCardInfoItem>
										<ActivityCardInfoItem>
											Season: {act.season}
										</ActivityCardInfoItem>
										<ActivityCardInfoItem>
											Duration: {act.duration} hs
										</ActivityCardInfoItem>
										<ActivityCardInfoItem>
											Difficulty: {act.difficulty}/5
										</ActivityCardInfoItem>
									</ActivityCardInfo>
								</ActivityCard>
							))
						) : (
							<>
								<h2>Do you want to add an activity?</h2>
								<Link to='/activities'>Create activity</Link>
							</>
						)}
					</ActivitiesContainer>
				</Wrapper>
			</Container>
		</Maincontainer>
	);
};

export default CountryDetail;
