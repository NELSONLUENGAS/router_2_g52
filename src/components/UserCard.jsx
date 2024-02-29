import IconFollowing from './IconFollowing';

export const UserCard = ({
	id,
	nombre,
	nombre_usuario,
	edad,
	ciudad,
	pais,
	email,
	avatar,
	descripcion_corta,
	filled,
	handleFollow,
}) => {
	return (
		<>
			<div className="flex flex-col gap-2 justify-center w-[250px] bg-black rounded-lg p-3 ">
				<div className="flex items-center justify-center">
					<figure className="w-[100px]">
						<img
							className="w-full object-contain"
							src={avatar}
							alt="foto de usuario"
						/>
					</figure>
				</div>
				<div>
					<strong>
						<p>{nombre_usuario}</p>
					</strong>
				</div>
				<div>
					<p>{descripcion_corta}</p>
				</div>
				<hr />
				<div className="flex items-center justify-end cursor-pointer">
					<button onClick={() => handleFollow(id)}>
						<IconFollowing filled={filled} />
					</button>
				</div>
			</div>
		</>
	);
};
