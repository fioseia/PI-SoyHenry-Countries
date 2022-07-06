import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddActivityForm from './components/AddActivityForm/AddActivityForm';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';


function App() {
	return (
		<Router>
			<Routes>
				<Route exact path={'/'} element={<Landing />} />
				<Route path={'/countries'} element={<Home />} />
				<Route path={'/countries/:id'} element={<CountryDetail />} />
				<Route path={'/activities'} element={<AddActivityForm />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
