import { useContext, useState } from 'react';
import { CharactersContext } from '../context/ContextProvider';
import { UserCard } from '../components/userCard';
import { UserCardSkeleton } from '../components/UserCardSkeleton';
import { useNavigate } from 'react-router-dom';

export const Characters = () => {
	const [character, setCharacter] = useState(null);

	const { characters } = useContext(CharactersContext);
	const charactersName = characters.map(({ name, id }) => ({ id, name }));

	const navigate = useNavigate();
	const handleChangeCharacter = (event) => {
		event.preventDefault();
		const { value } = event.target;
		setCharacter(Number(value));
	};

	const handleViewCharacterDetails = () => {
		if (character) {
			navigate(`/characters/${character}`);
		} else {
			alert('Ey!! Seleciona un Character');
		}
	};

	return (
		<div>
			<h1>Users following</h1>
			<div className="flex flex-wrap gap-3 p-3">
				<select
					name="characters"
					id="characters"
					onChange={handleChangeCharacter}
					defaultValue="option"
				>
					<option
						value="option"
						disabled
					>
						Select a Character
					</option>
					{charactersName.length &&
						charactersName.map(({ id, name }) => (
							<option
								key={id}
								value={id}
							>
								{name}
							</option>
						))}
				</select>
			</div>
			<div className="flex flex-col items-start  p-4">
				<button
					onClick={handleViewCharacterDetails}
					className="rounded p-2 bg-green-500 font-black"
				>
					Ver detalles
				</button>
			</div>
		</div>
	);
};
