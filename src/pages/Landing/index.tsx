import React, { useEffect, useState } from "react";
import logoIMG from "../../assets/images/logo.svg";
import landingImage from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClasses from "../../assets/images/icons/give-classes.svg";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";
import "./styles.css";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Landing() {
	const [totalConnections, setTotalConnections] = useState(0);

	useEffect(() => {
		api.get("connections").then((response) => {
			const { total } = response.data;

			setTotalConnections(total);
		});
	}, []);
	return (
		<div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={logoIMG} alt="Proffy" />
					<h2>Sua Plataforma de estudos online.</h2>
				</div>
				<img
					src={landingImage}
					alt="Plataforma de estudos"
					className="hero-image"
				/>
				<div className="buttons-container">
					<Link to="/study" className="study">
						<img src={studyIcon} alt="Estudar" />
						Estudar
					</Link>
					<Link to="/give-classes" className="give-classes">
						<img src={giveClasses} alt="Estudar" />
						Dar aulas
					</Link>
				</div>
				<span className="total-connections">
					Total de {totalConnections} conexoes ja realizadas{" "}
					<img src={purpleHeart} alt="Coracao roxo" />
				</span>
			</div>
		</div>
	);
}

export default Landing;
