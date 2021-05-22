import { env } from "../../../envConfig";

export const getPlayers = async (search = '', order = 'asc', page) => {
	let players = [];

	try {
		players = await fetch(`${env.url}/players?search=${search}&order=${order}&page=${page}`);
	} catch (error) {
		console.log(error)
	}
	return players?.json();
}