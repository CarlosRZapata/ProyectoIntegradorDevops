import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home";
import Collections from "../Pages/Collections/Collections";
import UsuariosCollections from "../Pages/Collections/usuarios/UsuariosCollections";
import CategoriasCollections from "../Pages/Collections/usuarios/CategoriasCollection";
import SesionCollections from "../Pages/Collections/usuarios/SesionCollection";
import SesionProductCollections from "../Pages/Collections/usuarios/SesionProductCollection";
import ProductosCollection from "../Pages/Collections/usuarios/ProductosCollection";
import DireccionCollection from "../Pages/Collections/usuarios/DireccionCollection";
import GeneroCollection from "../Pages/Collections/usuarios/GeneroCollection";
import ClientesCollection from "../Pages/Collections/usuarios/ClientesCollection";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Home /> },
			{
				path: "collections",
				element: <Collections />,
				children: [
          { path: "usuarios", element: <UsuariosCollections /> },
          { path: "categorias", element: <CategoriasCollections /> },
          { path: "tipoSesion", element: <SesionCollections /> },
          { path: "Sesion_Productos", element: <SesionProductCollections /> },
          { path: "Productos", element: <ProductosCollection /> },
          { path: "Direccion", element: <DireccionCollection /> },
          { path: "Genero", element: <GeneroCollection /> },
          { path: "Clientes", element: <ClientesCollection /> },
        ],
			},
		],

                
	},
]);