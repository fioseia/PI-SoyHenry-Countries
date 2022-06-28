import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCategories,
	getFilteredCountries,
} from '../../../redux/actions/actions';
import {
  Categories,
	Container,
	Label,
	Legend,
	Radio,
	Searchbar,
  Subcategories,
} from './SidebarStyles';

const Sidebar = () => {
	const [query, setQuery] = useState({
		name: '',
		category: '',
		subcategory: '',
	});
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

	const handleFilter = (e) => {
		setQuery({
			...query,
			[e.target.name]: e.target.value === 'All' ? '' : e.target.value,
		});
	};

	return (
		<Container>
			<Searchbar
				type='text'
				placeholder='Search...'
				name='name'
				onChange={(e) => handleFilter(e)}
			/>
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
                  handleFilter(e)
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
				<button onClick={(e) =>setVisibility(false)}>Return</button>
			</Subcategories>
		</Container>
	);
};

export default Sidebar;
