import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About';
import './App.css';
import { NotFound } from './pages/NotFound';
import { AboutItem } from './pages/AboutItem';
import { RequireAuth } from './RequireAuth';

const App = () => {
	return (
		<div className='geral'>
			<h1>Titulo do site</h1>

			<hr/>
			
			<div>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/sobre" element={ 
						<RequireAuth>
							<About/>
						</RequireAuth> } 
					/>
					<Route path="/sobre/:slug" element={ <AboutItem/> }/>
					<Route path="*" element={ <NotFound /> }/>
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
