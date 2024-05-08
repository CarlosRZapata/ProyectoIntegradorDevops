import React from "react";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import MenuSidebar from "./tabla/MenuSidebar";

const App: React.FC = () => {
	return (
		<Layout>
			<Sider width={"25%"}>
				<MenuSidebar />
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }} />
				<Content
					className="site-layout-background"
					style={{ margin: "0 16px", padding: 24, minHeight: 360 }}
				>
					<Outlet />
				</Content>
				<Footer style={{ textAlign: "center" }}>Footer</Footer>
			</Layout>
		</Layout>
	);
};

export default App;