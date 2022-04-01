import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Card, Button} from 'react-bootstrap';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import './App.css';

function App() {

	document.title = "IPC2 Conferencia"
	const [student, setStudent] = useState({carne: "", nombre: ""})

	function handleChange(event){
		const { name, value } = event.target
		setStudent((student) => ({
			...student,
			[name]: value
		}));
	}

	const registrar = (event) => {		
		console.log("estudiante: "+student.carne+" "+student.nombre)
		event.preventDefault();
		axios.post(`http://localhost:5000/estudiante`, student ).then(res => {
			console.log(res)
			toast("Asistencia Registrada")
		}).catch( err => {
			console.log("Error: "+ err)
			toast("Error durante el registro")
		})


	}

  return (
	  <>
    <Container className="login-container">
			<Container className="login-subcontainer d-flex justify-content-center">
				<Form onSubmit={registrar}>
					<Card className="login-card">
						<Card.Body>
							<Form.Text className="TituloCard"><h2>Conferencia IPC-2</h2></Form.Text>
							<Form.Group className="mb-3">
								<Form.Label htmlFor="formName">Carnet</Form.Label>
								<Form.Control name="carne" value={student.carne} onChange={handleChange} type="text" id="carne" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label htmlFor="formName">Nombre</Form.Label>
								<Form.Control name="nombre" value={student.nombre} onChange={handleChange} type="text" id="nombre" />
							</Form.Group>
							<Form.Group className="botn mb-3">
								<Button type="submit" className="login-btn">Registrar Asistencia</Button>
							</Form.Group>
						</Card.Body>
					</Card>
				</Form>
			</Container>
			<ToastContainer></ToastContainer>
		</Container>
	</>
  );
}

export default App;
