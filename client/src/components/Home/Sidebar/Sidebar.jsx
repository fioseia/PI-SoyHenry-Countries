import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCategories,
	getFilteredCountries,
	sortCountriesName,
	sortCountriesPop,
} from '../../../redux/actions/actions';

import { Container, Filter, Option, Searchbar, Select } from './SidebarStyles';

const Sidebar = () => {
	const [query, setQuery] = useState({
		name: '',
		continent: '',
		category: '',
		subcategory: '',
	});
	const [orderPop, setOrderPop] = useState('');
	const [orderName, setOrderName] = useState('');
	const categories = useSelector((state) => state.activitiesReducer.categories);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		dispatch(getFilteredCountries(query));
		dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	useEffect(() => {
		dispatch(sortCountriesName(orderName));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderName]);

	useEffect(() => {
		dispatch(sortCountriesPop(orderPop));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderPop]);

	const handleFilter = (e) => {
		setQuery({
			...query,
			[e.target.name]: e.target.value === 'All' ? '' : e.target.value,
		});
	};
	const handlerOrder = (e) => {
		if (e.target.name === 'pop') {
			setOrderPop(e.target.value);
		} else {
			setOrderName(e.target.value);
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
			<Filter>
				Categories
				<Select name='category' onChange={(e) => handleFilter(e)}>
					{categories &&
						Object.getOwnPropertyNames(categories).map((category) => (
							<Option key={category} value={category}>
								{category}
							</Option>
						))}
				</Select>
			</Filter>
			<Filter>
				Subcategories
				<Select
					name='subcategory'
					onChange={(e) => handleFilter(e)}
					disabled={query.category ? false : true}
				>
					{query.category &&
						categories[query.category] &&
						categories[query.category].map((subcategory) => (
							<Option key={subcategory.id} value={subcategory.name}>
								{subcategory.name}
							</Option>
						))}
				</Select>
			</Filter>
			<Filter>
				Continent
				<Select name='continent' onChange={(e) => handleFilter(e)}>
					<Option value=''>All</Option>
					<Option value='Africa'>Africa</Option>
					<Option value='Asia'>Asia</Option>
					<Option value='Europe'>Europe</Option>
					<Option value='North America'>North America</Option>
					<Option value='Oceania'>Oceania</Option>
					<Option value='South America'>South America</Option>
					<Option value='Antarctica'>Antarctica</Option>
				</Select>
			</Filter>
			<Filter>
				Population
				<Select name='pop' onChange={(e) => handlerOrder(e)}>
					<Option value=''></Option>
					<Option value='asc'>Ascending</Option>
					<Option value='desc'>Descending</Option>
				</Select>
			</Filter>
			<Filter>
				Name
				<Select name='name' onChange={(e) => handlerOrder(e)}>
					<Option value=''></Option>
					<Option value='asc'>Ascending</Option>
					<Option value='desc'>Descending</Option>
				</Select>
			</Filter>
		</Container>
	);
};

export default Sidebar;
