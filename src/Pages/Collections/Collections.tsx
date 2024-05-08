import React from "react";
import { Space, Row, Card, Button, Typography } from "antd";
import { Link, Outlet, useOutlet } from "react-router-dom";
import { toTitleCase } from "../../utils/stringFormater";

interface Collection {
	id: number;
	title: string;
	description: string;
	key: string;
}

interface CollectionsProps {}

const Collections: React.FC<CollectionsProps> = () => {
	
	const outlet = useOutlet();
	const collectionsData: Collection[] = [
		{
			id: 1,
			title: "usuarios",
			description: "Descripción de la colección 1",
			key: "usuarios",
		},

		{
			id: 2,
			title: "Categorias",
			description: "Descripción de la colección 2",
			key: "categorias",
		},

		{
			id: 3,
			title: "Sesion",
			description: "Descripción de la colección 3",
			key: "tipoSesion",
		},

        {
			id: 4,
			title: "Sesion de productos",
			description: "Descripción de la colección 4",
			key: "Sesion_Productos",
		},

        {
			id: 5,
			title: "Productos",
			description: "Descripción de la colección 5",
			key: "Productos",
		},

        {
			id: 6,
			title: "Direccion",
			description: "Descripción de la colección 6",
			key: "Direccion",
		},

        {
			id: 7,
			title: "Genero",
			description: "Descripción de la colección 7",
			key: "Genero",
		},

        {
			id: 8,
			title: "Clientes",
			description: "Descripción de la colección 8",
			key: "Clientes",
		},
	];

	if (!outlet) {return (
		<>
			<Typography.Title>Colecciones</Typography.Title>
			<Space direction="vertical" size={20}>
				<Row gutter={16}>
					{collectionsData.map((collection) => (
						<Space key={collection.id} direction="vertical">
							<Card
								title={toTitleCase(collection.title)}
								extra={
									<Button type="primary">
										<Link to={`/collections/${collection.key}`}>Ver</Link>
									</Button>
								}
								style={{ width: 300 }}
							>
								{collection.description}
							</Card>
						</Space>
					))}
				</Row>
			</Space>
			
		</>
	);}
	return <Outlet/>
};

export default Collections;