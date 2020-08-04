import React from "react";
import logoIMG from "../../assets/images/logo.svg";
import landingImage from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClasses from "../../assets/images/icons/give-classes.svg";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";
import "./styles.css";

function Landing() {
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
					<a href="" className="study">
						<img src={studyIcon} alt="Estudar" />
						Estudar
					</a>
					<a href="" className="give-classes">
						<img src={giveClasses} alt="Estudar" />
						Dar aulas
					</a>
				</div>
				<span className="total-connections">
					Total de 200 conexoes ja realizadas{" "}
					<img src={purpleHeart} alt="Coracao roxo" />
				</span>
			</div>
		</div>
	);
}

export default Landing;
