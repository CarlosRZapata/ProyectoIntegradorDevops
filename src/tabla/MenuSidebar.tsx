import { GroupOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { Link } from "react-router-dom";

type MenuItem = {
	label: string;
	key: string;
	icon: React.ReactNode;
	link: string;
};

const MenuSidebar = () => {
	const itemsMenu: MenuItem[] = [
		{ label: "Home", key: "home", icon: <HomeOutlined />, link: "/" },
		{
			label: "Collections",
			key: "collections",
			icon: <GroupOutlined />,
			link: "/collections",
		},
	];
	return (
		<Menu theme="dark" mode="inline" defaultSelectedKeys={["home"]}>
			{itemsMenu.map((item) => (
				<Menu.Item key={item.key} icon={item.icon}>
					<Link to={item.link}>{item.label}</Link>
				</Menu.Item>
			))}
		</Menu>
	);
};

export default MenuSidebar;