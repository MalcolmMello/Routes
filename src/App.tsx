import { RouteList } from "./routes/RouteList";

const App = () => {
	return (
		<div className='geral'>
			<h1>Titulo do site</h1>

			<hr/>
			
			<div>
				<RouteList />
			</div>

			<hr />

			<div>
				Todos os direitos reservados
			</div>
		</div>
	);
}

export default App;
