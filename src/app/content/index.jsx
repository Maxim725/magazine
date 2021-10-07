import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from '../routes/routes'

const Content = () => {
	console.log(routes)
	return (
		<Switch>
			{routes.map((route, i) =>
				<Route exact key={i} {...route} />
			)}
		</Switch>
	)
}

export default Content