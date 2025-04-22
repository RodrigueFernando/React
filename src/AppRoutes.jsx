import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio/inicio";
import SobreMim from "./paginas/sobreMim/index";
import Menu from "./componentes/Menu/index"
function AppRoutes() {
  return (
    <BrowserRouter>
       <Menu/>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
