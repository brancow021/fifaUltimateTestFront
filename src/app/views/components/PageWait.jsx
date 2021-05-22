import React from 'react'
import { Container } from '../../../styles/StyleComponents'

export const PageWait = () => {
	return (
		<>
			<Container>
				<div className="alertNotPlayers">
					¡No hay jugadores, porque favor haga una busqueda!
				</div>
			</Container>
		</>
	)
}
