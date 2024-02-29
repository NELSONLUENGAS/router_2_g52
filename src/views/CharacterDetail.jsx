import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CharactersContext } from '../context/ContextProvider';

export const CharacterDetail = () => {
	const { characters } = useContext(CharactersContext);
	const { id } = useParams();

	const characterDetail = characters.find((character) => character.id == id);

	console.log();

	console.log(characterDetail);

	return (
		<div>
			{characterDetail ? (
				<>
					<h1>User Detail / {id}</h1>
					<div className="flex flex-col gap-3 p-3">
						<h1>{characterDetail.name}</h1>
						<figure>
							<img
								loading="lazy"
								src={characterDetail.image}
								alt={characterDetail.species}
							/>
							<figcaption>{characterDetail.gender}</figcaption>
						</figure>

						<div>
							<p>{characterDetail.status}</p>
						</div>

						<div>
							<p>
								Type:{' '}
								{characterDetail.type
									? characterDetail.type
									: "Doesn't have type"}
							</p>
						</div>
					</div>
				</>
			) : (
				<h1>Loading Character</h1>
			)}
		</div>
	);
};
