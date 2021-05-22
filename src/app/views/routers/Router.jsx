import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Detail } from '../pages/Detail';
import { Home } from '../pages/Home'


export const Router = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/detail' component={Detail} />

				<Redirect to="/"/>
			</Switch>
		</>
	);
}
