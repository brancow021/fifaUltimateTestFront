import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Container, DetailBox } from '../../../styles/StyleComponents'
import { CardPlayer } from '../components/CardPlayer'

export const Detail = ({location}) => {
	const [playerData, setplayerData] = useState({});
	const history = useHistory();

	useEffect(() => {
		if(location?.state){
			setplayerData(location?.state)
		} else {
			history.push('/')
		}
	}, [])

	return (
		<>
			<Container>
				<DetailBox className='row fullBody center'>
					<div className='detail center'>
						<CardPlayer playerData={playerData} />
					</div>
					<div className='detail1'>
						<div>
							<h3>
								Nombre:{" "}
								<span className='infoText'>{playerData.name}</span>
							</h3>
							<h3>
								Nación:{" "}
								<span className='infoText'>
									{playerData.nationality}
								</span>
							</h3>
							<h3>
								Team: <span className='infoText'>{playerData.team}</span>
							</h3>
							<h3>
								Posicion: <span className='infoText'>{playerData.position}</span>
							</h3>
						</div>
					</div>
				</DetailBox>
			</Container>
		</>
	);
}
