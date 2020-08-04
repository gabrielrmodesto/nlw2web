import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";
import "./styles.css";

export default function TeachersList() {
	return (
		<div id="page-teacher-list" className="container">
			<header className="page-header">
				<div className="top-bar-container">
					<Link to="/">
						<img src={backIcon} alt="Voltar" />
					</Link>
					<img src={logoImg} alt="Proffy" />
				</div>
				<div className="header-content">
					<strong>Estes sao os proffys disponiveis</strong>
				</div>
			</header>
		</div>
	);
}
