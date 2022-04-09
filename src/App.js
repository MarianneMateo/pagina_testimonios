import './App.css';
import Testimonio from './components/Testimonio';

function App() {
	return (
		<div className="App">
			<div className="contenedor-principal">
				<h1>Esto es lo que piensan nuestros compañeros de sus trabajos:</h1>
				<Testimonio
					nombre="Emma Bostian"
					pais="Cánada"
					imagen="emma"
					cargo="Ingeniera de Software"
					empresa="Google"
					testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Sagittis id consectetur purus ut faucibus."
				/>
				<Testimonio
					nombre="Luis Santana"
					pais="Italia"
					imagen="luis"
					cargo="Ingeniero de Software"
					empresa="Spotify"
					testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Sagittis id consectetur purus ut faucibus."
				/>
				<Testimonio
					nombre="Ana Rodríguez"
					pais="USA"
					imagen="ana"
					cargo="Ingeniera de Software"
					empresa="Youtube"
					testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi."
				/>
			</div>
		</div>
	);
}

export default App;
