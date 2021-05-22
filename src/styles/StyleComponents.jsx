import styled from "styled-components";
import bgCard from "../assets/card_bg.png";
import bgBody from "../assets/bgBody.webp";


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #eee;
	margin: 0px;
	height: 100%;
	overflow-x: hidden;
	overflow-y: visible;

	@media (max-width: 768px) {
		display: block;
		width: 100%;
		/* padding: 10px; */
	}
`;

export const FilterBox = styled.div`
	display: flex;
	justify-content: flex-start;
	background-color: #f92160;
	padding: 10px;
	position: sticky;

	@media (max-width: 768px) {
		justify-content: center;
		flex-direction: column;
	}
`;

export const Input = styled.input`
	padding: 10px;
	border-radius: 10px;
	border: 1px solid silver;
	font-size: medium;
	margin-left: 10px;
	margin-right: 10px;

	@media (max-width: 768px) {
		width: 90%;
		margin-bottom: 5px;
	}
`;

export const Select = styled.select`
	padding: 10px;
	border-radius: 10px;
	border: 1px solid silver;
	font-size: medium;
	margin-left: 10px;
	margin-right: 10px;

	@media (max-width: 768px) {
		width: 90%;
		margin-bottom: 5px;
	}
`;

export const Button = styled.button`
	background-color: #6494b4;
	border: 1px solid #4a7b9c;
	border-radius: 5px;
	padding: 10px;
	margin-left: 5px;
	color: white;
	font-size: large;
	cursor: pointer;
	width: 50px;
	margin-left: 10px;
	margin-right: 10px;

	@media (max-width: 768px) {
		width: 90%;
		height: 40px;
	}
`;

export const LabelInput = styled.label`
	font-weight: bold;
	color: #eee;
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	font-size: medium;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Row = styled.div`
	margin: 0 -5px;

	&:after {
		content: "";
		display: table;
		clear: both;
	}
`;

export const Column = styled.div`
	float: left;
	width: 25%;
	padding: 0 10px;

	@media screen and (max-width: 600px) {
		width: 100%;
		display: block;
		margin-bottom: 20px;
	}
`;

export const Card = styled.div`
	padding: 16px;
	text-align: center;
	height: auto;
	background-image: url(${bgCard});
	position: relative;
	width: 250px;
	height: 390px;
	background-position: center center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
`;

export const Content = styled.div`
	height: 100%;
	margin-top: 10px;
	padding: 50px;
	overflow-y: hidden;

	@media (max-width: 768px) {
		padding: 10px;
		justify-content: center;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const HeaderInfo = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
`;

export const ImagePlayer = styled.div`
	height: 40px;
	width: 50px;
`;

export const SkillBox = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 40px 0px 40px;
`;

export const Menu = styled.div`
	cursor: pointer;
	width: 100%;
	margin-bottom: 10px;
	display: none;

	@media (max-width: 768px) {
		display: flex;
		justify-content: flex-end;
	}
`;

export const DetailBox = styled.div`
	background-image: url(${bgBody});
	background-position: center center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	padding: 50px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
