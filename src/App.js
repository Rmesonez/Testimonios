//import logo from './logo.svg';
import Testimonio from './componentes/Testimonio.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className= 'contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos
            sobre FreeCodeCamp:
        </h1>
        
        <Testimonio
          nombre ='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Siempre he tenido problemas para aprender Javascript.
                      He tomado muchos cursos, pero el de freecodecamp fue
                      el que se quedo. FreeCodeCamp cambio mi vida.' 
        />


        <Testimonio
          nombre ='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='Siempre he tenido problemas para aprender Javascript.
                      He tomado muchos cursos, pero el de freecodecamp fue
                      el que se quedo. FreeCodeCamp cambio mi vida.' 
        />


        <Testimonio
          nombre ='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender Javascript.
                      He tomado muchos cursos, pero el de freecodecamp fue
                      el que se quedo. FreeCodeCamp cambio mi vida.' 
        />
      </div>
    </div>
  );
}

export default App;
