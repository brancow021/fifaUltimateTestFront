import React, {useState } from "react";
import {
	Column,
	Container,
	Row,
	Content,
} from "../../../styles/StyleComponents";
import { CardPlayer } from "../components/CardPlayer";
import { SearchBar } from "../components/SearchBar";
import { getPlayers } from "../../application/services/getPlayers";
import { Pagination } from "../components/Pagination";
import { useFormik } from "formik";
import { PageWait } from "../components/PageWait";
import { getPlayersTeam } from "../../application/services/getPlayersTeam";

export const Home = () => {
	const [players, setplayers] = useState([]);
	const [keyword, setkeyword] = useState("");
	const [isSearchTeam, setisSearchTeam] = useState(false);

	const formik = useFormik({
		initialValues: { keyword: "", orden: "asc", type: "" },
		validateOnChange: true,
		validateOnMount: true,
		onSubmit: ({ keyword, orden, type }) => {
			listSearchPlayers(keyword.trim(), type, orden);
		},
	});


	const fetchPlayersPagination = async ({ order = "", page }) => {
		if (isSearchTeam) {
			fetchPlayersTeam(keyword, page);
		} else {
			let player = await getPlayers((keyword), order, page);
			setplayers(player);
		}
		window.scrollTo(0, 0);
	};


	const fetchPlayersTeam = async (search, page) => {
		let player = await getPlayersTeam(search, page);
		setplayers(player);
	};


	const listSearchPlayers = async (keyword, type, orden) => {
		setkeyword(keyword.trim());
		if (type === "forTeam") {
			fetchPlayersTeam(keyword, players?.Page);
			setisSearchTeam(true);

		} else {
			setisSearchTeam(false);

			let player = await getPlayers(
				keyword.trim(),
				orden,
				players?.Page,
				type
			);
			setplayers(player);
		}
	};

	return (
		<>
			<Container>
				<SearchBar formik={formik} />
				{players.length !== 0 ? (
					<Content>
						<Row>
							{players?.Players?.map((player) => (
								<Column key={player._id}>
									<div className='card'>
										<CardPlayer playerData={player} />
									</div>
								</Column>
							))}
						</Row>

						<div className='paginateBox'>
							<Pagination
								players={players}
								fetchPlayers={fetchPlayersPagination}
								formik={formik}
							/>
						</div>
					</Content>
				) : (
					<PageWait />
				)}
			</Container>
		</>
	);
};
