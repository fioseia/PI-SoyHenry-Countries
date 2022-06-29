import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCategories,
	getFilteredCountries,
	sortCountriesName,
	sortCountriesPop,
} from '../../../redux/actions/actions';
import {
	Categories,
	Checkbox,
	Container,
	Label,
	Legend,
	Radio,
	Searchbar,
	Slider,
	Subcategories,
	Switch,
	Wrapper,
} from './SidebarStyles';

const Sidebar = () => {
	const [query, setQuery] = useState({
		name: '',
    continent: '',
		category: '',
		subcategory: '',
	});
	const [orderPop, setOrderPop] = useState('asc');
	const [orderName, setOrderName] = useState('asc');
	const [visibility, setVisibility] = useState('');
	const categories = useSelector((state) => state.activitiesReducer.categories);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	useEffect(() => {
		dispatch(getFilteredCountries(query));
		dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
	}, [query]);

	useEffect(() => {
		dispatch(sortCountriesName(orderName));
	}, [orderName]);

	useEffect(() => {
		dispatch(sortCountriesPop(orderPop));
	}, [orderPop]);

	const handleFilter = (e) => {
		setQuery({
			...query,
			[e.target.name]: e.target.value === 'All' ? '' : e.target.value,
		});
	};

	const handlerOrder = (e) => {
		if (e.target.name === 'pop') {
			setOrderPop(orderPop === 'asc' ? 'desc' : 'asc');
		} else {
			setOrderName(orderName === 'asc' ? 'desc' : 'asc');
		}
	};

	return (
		<Container>
			<Searchbar
				type='text'
				placeholder='Search...'
				name='name'
				onChange={(e) => handleFilter(e)}
			/>
			<select name='continent'onChange={(e) => handleFilter(e)}>
				<option value='All'>All</option>
				<option value='Europe'>Europe</option>
				<option value='Asia'>Asia</option>
				<option value='Africa'>Africa</option>
				<option value='Oceania'>Oceania</option>
				<option value='North America'>North America</option>
				<option value='South America'>South America</option>
				<option value='Antarctica'>Antarctica</option>
			</select>
			<Categories visibility={visibility}>
				<Legend>Category</Legend>
				{categories &&
					Object.getOwnPropertyNames(categories).map((category) => (
						<Label key={category}>
							<Radio
								type='radio'
								name='category'
								value={category}
								onChange={(e) => {
									handleFilter(e);
									setVisibility(e.target.value);
								}}
							/>
							{category}
						</Label>
					))}
			</Categories>
			<Subcategories visibility={visibility}>
				<Legend>Subcategory</Legend>
				{visibility &&
					categories[visibility].map(({ name }) => (
						<Label key={name}>
							<Radio
								type='radio'
								name='subcategory'
								value={name}
								onChange={(e) => handleFilter(e)}
							/>
							{name}
						</Label>
					))}
				<button
					value={'All'}
					name={'category'}
					onClick={(e) => {
						handleFilter(e);
						setVisibility(false);
					}}
				>
					Return
				</button>
			</Subcategories>
			<Wrapper>
				Name ↓
				<Switch>
					<Checkbox
						type='checkbox'
						name='name'
						onChange={(e) => handlerOrder(e)}
					/>
					<Slider></Slider>
				</Switch>
				↑
			</Wrapper>
			<Wrapper>
				Population
				<Switch>
					↓
					<Checkbox
						type='checkbox'
						name='pop'
						onChange={(e) => handlerOrder(e)}
					/>
					<Slider></Slider>↑
				</Switch>
			</Wrapper>
		</Container>
	);
};

export default Sidebar;
