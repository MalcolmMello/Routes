import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About';
import './App.css';

const App = () => {
	return (
		<div className='geral'>
			<h1>Titulo do site</h1>

			<hr/>
			
			<div>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/sobre" element={ <About/> }/>
				</Routes>
			</div>

			<hr />

			<div>
				Todos os direitos reservados
			</div>
		</div>
	);
}

export default App;
