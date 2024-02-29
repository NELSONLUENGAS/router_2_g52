import { createContext, useEffect, useState } from 'react';

export const CharactersContext = createContext();

export const ContextProvider = ({ children }) => {
	const [characters, setcharacters] = useState([]);

	const FetchCharacters = async () => {
		const charactersJson = await fetch(
			'https://rickandmortyapi.com/api/character'
		);
		const { results } = await charactersJson.json();
		const charactersData = results.map(
			({ id, name, status, species, type, gender, image }) => {
				return {
					id,
					name,
					status,
					species,
					type,
					gender,
					image,
				};
			}
		);

		setcharacters(charactersData);
	};

	useEffect(() => {
		FetchCharacters();
	}, []);

	return (
		<CharactersContext.Provider value={{ characters, setcharacters }}>
			{children}
		</CharactersContext.Provider>
	);
};
