import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { connect } from 'react-redux';
import {
	addActivity,
	getAllCountries,
	getCategories,
	sortCountriesName,
} from '../../redux/actions/actions';
import {
	Container,
	Country,
	DeleteButton,
	Error,
	Form,
	Input,
	Label,
	Option,
	Select,
	Submit,
	Wrapper,
} from './AddActivityFormStyles';

export class AddActivityForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				name: '',
				difficulty: 1,
				duration: '',
				season: '',
				category: '',
				subcategoryId: '',
				countriesId: [],
			},
			errors: {},
		};
		this.seasons = ['', 'Winter', 'Spring', 'Summer', 'Autumn'];
	}

	componentDidMount() {
		this.props.getCategories();
		this.props.getAllCountries();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.countries.length !== this.props.countries.length) {
			this.props.sortCountriesName('asc');
		}
	}

	validate = (state) => {
		const {
			name,
			difficulty,
			duration,
			season,
			category,
			subcategoryId,
			countriesId,
		} = state;
    console.log(subcategoryId)
		const errors = {};
		if (!name) {
			errors.name =
				'Name is required and must be between 5-45 characters long and must contain only letters and numbers';
		}
		if (!Number(difficulty) || difficulty < 0 || difficulty > 5) {
			errors.difficulty = 'Difficulty must be between 1-5';
		}
		if (!duration || /^[0-2][0-3]:[0-5][0-9]$/.test(duration)) {
			errors.duration = 'Duration is required';
		}
		if (!this.seasons.includes(season)) {
			errors.season = 'Season must be Summer, Autumn, Winter or Spring';
		}
		if (!category || !Object.keys(this.props.categories).includes(category)) {
			errors.category = 'Category is required';
		}
		if (!Number(subcategoryId) || subcategoryId < 1 || subcategoryId > 25) {
			errors.subcategoryId = 'Subcategory must be one of the options';
		}
		if (countriesId.length < 1) {
			errors.countriesId = 'At least one country must be selected';
		}
    console.log(errors)


		this.setState((state) => ({ errors }));
	};

	handleChange = (e) => {
		let value = e.target.value;
		if (e.target.name === 'difficulty' || e.target.name === 'subcategoryId')
    console.log(value)
			//value = parseInt(value);
		this.setState((state) => ({
			data: { ...state.data, [e.target.name]: value },
		}));
	};

	handleCountries = (e) => {
		if (!this.state.data.countriesId.includes(e.target.value)) {
			this.setState((state) => ({
				data: {
					...state.data,
					countriesId: [...state.data.countriesId, e.target.value],
				},
			}));
		}
	};

	handleDelete = (e) => {
		e.preventDefault();
		this.setState((state) => ({
			data: {
				...state.data,
				countriesId: state.data.countriesId.filter(
					(country) => country !== e.target.id
				),
			},
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.validate(this.state.data);
		setTimeout(() => {
			if (Object.keys(this.state.errors).length === 0) {
				addActivity(this.state.data);
				this.setState({
					data: {
						name: '',
						difficulty: 1,
						duration: '',
						season: '',
						category: '',
						subcategoryId: '',
						countriesId: [],
					},
				});
			} else {
				alert('Complete all the fields in the form');
			}
		}, 1000);
	};

	render() {
		return (
			<>
				<Navbar button={'home'} />
				<Container>
					<Form onSubmit={this.handleSubmit}>
						<Label>
							Name
							<Input
								name='name'
								type='text'
								placeholder='Enter activity name'
								pattern='^[a-zA-Z0-9 ]{5,45}$'
								value={this.state.data.name}
								required
								onChange={(e) => this.handleChange(e)}
							/>
							{this.state.errors.name && (
								<Error>{this.state.errors.name}</Error>
							)}
						</Label>
						<Label>
							Difficulty
							<Input
								name='difficulty'
								type='range'
								min='1'
								max='5'
								step='1'
								value={this.state.data.difficulty}
								required
								onChange={(e) => this.handleChange(e)}
							/>
						</Label>
						<Label>
							Duration
							<Input
								name='duration'
								type='time'
								min='00:05'
								max='24:00'
								step='300'
								value={this.state.data.duration}
								required
								onChange={(e) => this.handleChange(e)}
							/>
							{this.state.errors.duration && (
								<Error>{this.state.errors.duration}</Error>
							)}
						</Label>
						<Label>
							Season
							<Select
								name='season'
								required
								onChange={(e) => this.handleChange(e)}
							>
								{this.seasons.map((option, index) => (
									<Option key={index} value={option}>
										{option}
									</Option>
								))}
							</Select>
							{this.state.errors.season && (
								<Error>{this.state.errors.season}</Error>
							)}
						</Label>
						{this.props.categories && (
							<Label>
								Category
								<Select
									name='category'
									required
									onChange={(e) => this.handleChange(e)}
								>
									{Object.getOwnPropertyNames(this.props.categories).map(
										(category, index) => (
											<Option
												key={index}
												value={category === 'All' ? '' : category}
											>
												{category === 'All' ? '' : category}
											</Option>
										)
									)}
								</Select>
								{this.state.errors.category && (
									<Error>{this.state.errors.category}</Error>
								)}
							</Label>
						)}
						{this.state.data.category && (
							<Label>
								Subcategory
								<Select
									name='subcategoryId'
									required
									onChange={(e) => this.handleChange(e)}
								>
									{this.props.categories &&
										this.props.categories[this.state.data.category].map(
											(subcategory, index) => (
												<Option
													key={index}
													value={
														subcategory.name === 'All' ? '' : subcategory.id
													}
												>
													{subcategory.name === 'All' ? '' : subcategory.name}
												</Option>
											)
										)}
								</Select>
								{this.state.errors.subcategoryId && (
									<Error>{this.state.errors.subcategoryId}</Error>
								)}
							</Label>
						)}
						{this.props.countries && (
							<Label>
								Countries
								<Select
									name='countriesId'
									required
									onChange={(e) => this.handleCountries(e)}
								>
									{this.props.countries.map((country) => (
										<Option key={country.id} id={country.id} value={country.id}>
											{country.name}
										</Option>
									))}
								</Select>
								{this.state.errors.countriesId && (
									<Error>{this.state.errors.countriesId}</Error>
								)}
							</Label>
						)}
						<div>
							{this.state.data.countriesId.map((country, index) => (
								<Wrapper key={index}>
									<Country>{country}</Country>
									<DeleteButton
										id={country}
										onClick={(e) => this.handleDelete(e)}
									>
										X
									</DeleteButton>
								</Wrapper>
							))}
						</div>
						{this.state.data.countriesId.length < 1 ? (
							<Submit type='submit' value='Create' disabled />
						) : (
							<Submit type='submit' value='Create' />
						)}
					</Form>
				</Container>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.activitiesReducer.categories,
	countries: state.countriesReducer.countries,
});

const mapDispatchToProps = (dispatch) => ({
	getCategories: () => dispatch(getCategories()),
	getAllCountries: () => dispatch(getAllCountries()),
	sortCountriesName: (order) => dispatch(sortCountriesName(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddActivityForm);
