import { UserCard } from './userCard';

import { UserCardSkeleton } from './UserCardSkeleton';

const Gallery = () => {
	const handleFollow = (id) => {
		const newFollowers = users.map((user) =>
			user.id === id ? { ...user, following: !user.following } : user
		);

		setUsers(newFollowers);
	};

	return (
		<div className="flex flex-wrap gap-3 p-3">
			{users.length ? (
				users.map((user, key) => (
					<UserCard
						key={key}
						id={user.id}
						nombre={user.nombre}
						nombre_usuario={user.nombre_usuario}
						edad={user.edad}
						ciudad={user.ciudad}
						pais={user.pais}
						email={user.email}
						avatar={user.avatar}
						descripcion_corta={user.descripcion_corta}
						filled={user.following}
						handleFollow={handleFollow}
					/>
				))
			) : (
				<>
					<UserCardSkeleton />
					<UserCardSkeleton />
					<UserCardSkeleton />
					<UserCardSkeleton />
					<UserCardSkeleton />
				</>
			)}
		</div>
	);
};
export default Gallery;
