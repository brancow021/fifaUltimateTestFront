import { env } from "../../../envConfig";

export const getPlayersTeam = async (search = "", page = 1) => {
	let players = [];
	let data = {
		name: search,
		page: page,
	};

	console.log("TEAM", data);

	try {
		players = await fetch(`${env.url}/team`, {
			method: "post",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		});
		
	} catch (error) {
		console.log(error)
	}


	return players?.json();
};
