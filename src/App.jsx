import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './views/Home';
import { Characters } from './views/Characters';
import { CharacterDetail } from './views/CharacterDetail';

const App = () => {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/characters"
					element={<Characters />}
				/>
				<Route
					path="/characters/:id"
					element={<CharacterDetail />}
				/>
			</Routes>
		</div>
	);
};
export default App;
