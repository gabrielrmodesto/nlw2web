import React from "react";
import "./style.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
	return (
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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
				odit?
				<br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
				cum quis culpa porro minus nostrum ducimus dolore doloremque
				nobis magni!
			</p>
			<footer>
				<p>
					Preco/hora
					<strong>R$ 80,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whastapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
};

export default TeacherItem;
