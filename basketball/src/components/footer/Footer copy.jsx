import React from "react";
import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
		<Container>
			<Row>
			<Column>
				<Heading>About Us</Heading>
			</Column>
			<Column>
				<FooterLink href="#">
				<i className="fab fa-facebook">
					<span style={{ marginLeft: "10px" }}>
					Facebook
					</span>
				</i>
				</FooterLink>
			</Column>
			<Column>
				<FooterLink href="#">
				<i className="fab fa-instagram">
					<span style={{ marginLeft: "10px" }}>
					Instagram
					</span>
				</i>
				</FooterLink>
			</Column>
			<Column>
				<FooterLink href="#">
				<i className="fab fa-github">
					<span style={{ marginLeft: "10px" }}>
					Github
					</span>
				</i>
				</FooterLink>
			</Column>
			</Row>
		</Container>
		</Box>
	);
};
export default Footer;
