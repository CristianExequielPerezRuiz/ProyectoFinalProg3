import { BrowserRouter,Routes,Route } from "react-router-dom";
import PaginaPrincipalLibreria from "./Componentes/PaginaPrincipal";
import Perfil from "./Componentes/Perfil/Perfil";
import HarryPotter from "./Componentes/Contenido/C_HarryPotter/HarryPotter";
import Registro from "./Componentes/Registro/Registro";
import Login from "./Componentes/Login/Login";
import DondeTodoBrilla from "./Componentes/Contenido/C_DondeTodoBrilla/DondeTodoBrilla";
import Berserk from "./Componentes/Contenido/C_Berserk/Berserk";
import EAmor_Tiempos from "./Componentes/Contenido/C_EAmor_Tiempos/EAmor_Tiempos";
import DonQuijote from "./Componentes/Contenido/C_DonQuijote/DonQuijote";
import Noticia_Secuestro from "./Componentes/Contenido/C_NoticiaDeUnSecuestro/Noticia_Secuestro";
import Axios from "./Componentes/Axios/Axios";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/paginaprincipallibreria" element={<PaginaPrincipalLibreria/>}></Route>
          <Route path="/perfil" element={<Perfil/>}></Route>
          <Route path="/harrypotter" element={<HarryPotter/>}></Route>
          <Route path="/registro" element={<Registro/>}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/donde_todo_brilla" element={<DondeTodoBrilla/>}></Route>
          <Route path="/berserk" element={<Berserk/>}></Route>
          <Route path="/elamorenlostiemposdecolera" element={<EAmor_Tiempos/>}></Route>
          <Route path="/donquijote" element={<DonQuijote/>}></Route>
          <Route path="/noticiadeunsecuestro" element={<Noticia_Secuestro/>}></Route>
          <Route path="/axios" element={<Axios/>}></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
