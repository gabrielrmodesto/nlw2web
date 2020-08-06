import React from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

export default function TeachersForms() {
	return (
		<div id="page-teacher-form" className="container">
			<PageHeader
				title="Que incrivel que voce quer dar aulas"
				description="O primeiro passo é preencher esse formulário de inscrição"
			/>
			<main>
				<fieldset>
					<legend>Seus dados</legend>
					<Input name="name" label="Nome completo" />
					<Input name="avatar" label="Avatar" />
					<Input name="whatsapp" label="Whatsapp" />
					<Textarea name="bio" label="Biografia" />
				</fieldset>
				<fieldset>
					<legend>Sobre a aula</legend>
					<Select
						name="subject"
						label="Materia"
						options={[
							{
								value: "Artes",
								label: "Artes",
							},
							{
								value: "Artes1",
								label: "Artes",
							},
							{
								value: "Artes2",
								label: "Artes",
							},
							{
								value: "Artes3",
								label: "Artes",
							},
							{
								value: "Artes4",
								label: "Artes",
							},
						]}
					/>
					<Input name="cost" label="Custo da sua hora por aula" />
				</fieldset>
				<footer>
					<p>
						<img src={warningIcon} alt="Aviso importante" />
						Importante <br />
						Preencha todos os dados
					</p>
					<button type="button">Salvar cadastro</button>
				</footer>
			</main>
		</div>
	);
}
