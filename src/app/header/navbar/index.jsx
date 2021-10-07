import React from 'react'

import { navbarLinks as routes } from '../../routes/routes'

import { Link } from './styles'

const HeaderNavbar = () => {
	console.log(routes)
	return (
		<>
			{routes.map(({ name, ...route }, i) => {
				console.log(route)
				return (
					<Link key={i} {...route}>
						{name}
					</Link>
				)
			})}
		</>
	)
}

export default HeaderNavbar