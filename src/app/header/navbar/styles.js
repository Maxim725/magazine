import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
	font-weight: 600;
	font-size: 0.9rem;
	line-height: 1.2rem;
	text-decoration: none;

	&:not(:last-child) {
		margin-right: 20px;
	}
`