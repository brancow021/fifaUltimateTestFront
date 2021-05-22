import React from "react";
import {
	Card,
	HeaderInfo,
	Img,
	SkillBox,
} from "../../../styles/StyleComponents";
import imagePlayer from "../../../assets/faceCard.png";
import logoFifa from "../../../assets/logoFifa.png";
import { useHistory } from "react-router";

export const CardPlayer = ({ playerData }) => {

	const history = useHistory();

	const handleClickDetail = () => {
		history.push({
			pathname: '/detail',
			state: playerData
		})
	}

	return (
		<>
			<Card onClick={handleClickDetail}>
				<div style={{ height: "100%" }}>
					<div className='infoPlayerBox'>
						<div className='imagePlayerBox'>
							<HeaderInfo>
								<p>94</p>
								<p>{playerData.position}</p>
								<img className='logoPlayer' src={logoFifa} alt='' />
							</HeaderInfo>
						</div>

						<div className='imagePlayer'>
							<Img src={imagePlayer} alt='' />
						</div>
					</div>

					<div style={{ marginTop: "20px" }}>
						<div style={{ borderBottom: "1px solid yellow" }}>
							<p>{playerData.name}</p>
						</div>

						<SkillBox>
							<div>
								<p><span>99</span> PAC</p>
								<p><span>99</span> SHO</p>
								<p><span>99</span> PAS</p>
							</div>
							<div>
								<p><span>99</span> DRI</p>
								<p><span>99</span> DEF</p>
								<p><span>99</span> PHY</p>
							</div>
						</SkillBox>
					</div>
				</div>
			</Card>
		</>
	);
};
