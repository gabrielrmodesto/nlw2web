import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
import PageHeader from "../../components/PageHeader";

export default function TeachersList() {
	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes sao os proffys disponiveis">
				<form id="search-teachers">
					<div className="input-block">
						<label htmlFor="subject">Materia</label>
						<input type="text" id="subject" />
					</div>
					<div className="input-block">
						<label htmlFor="week_day">Dia da semana</label>
						<input type="text" id="week_day" />
					</div>
					<div className="input-block">
						<label htmlFor="time">Hora</label>
						<input type="text" id="time" />
					</div>
				</form>
			</PageHeader>
			<main>
				<article className="teacher-item">
					<header>
						<img
							src="https://avatars0.githubusercontent.com/u/15326732?s=460&u=d0748aae28b41f6eaf3c657ed0ee2a6bc20ceb56&v=4"
							alt="Perfil foto"
						/>
						<div>
							<strong>Gabriel Modesto</strong>
							<span>Logica de programacao</span>
						</div>
					</header>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Enim, odit?
						<br />
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Hic cum quis culpa porro minus nostrum ducimus
						dolore doloremque nobis magni!
					</p>
					<footer>
						<p>
							Preco/hora
							<strong>R$ 80,00</strong>
						</p>
						<button type="button">
							<img src={whatsappIcon} alt="Whastapp"/>
							Entrar em contato
						</button>
					</footer>
				</article>
			</main>
		</div>
	);
}
