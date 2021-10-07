import React from 'react'

import HeaderNavbar from './navbar'

import { Container, Nav, UserInfo, Wrapper } from './styles'

const Header = () => {
	return (
		<Wrapper>
			<Container>
				<Nav>
					<HeaderNavbar />
				</Nav>
			</Container>
		</Wrapper>
	)
}

export default Header