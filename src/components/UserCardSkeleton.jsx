export const UserCardSkeleton = () => {
	return (
		<>
			<div className="flex flex-col gap-2 justify-center w-[250px] bg-black rounded-lg p-3 ">
				<div className="flex items-center justify-center">
					<figure className="w-[100px] h-[100px]">
						<div className="w-full h-full bg-white rounded-full loading" />
					</figure>
				</div>
				<div className="flex items-center justify-center">
					<div className="w-[150px] h-[30px] bg-white rounded loading"></div>
				</div>
				<div className="flex items-center justify-center">
					<div className="w-[150px] h-[60px] bg-white rounded loading"></div>
				</div>
				<hr />
				<div className="flex items-center justify-end">
					<button className="w-[30px] h-[30px] bg-white rounded-full loading"></button>
				</div>
			</div>
		</>
	);
};
