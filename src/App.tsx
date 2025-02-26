import React from "react";
import { Layout, FloatButton, Button, Row, Col } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { CommentOutlined, MessageOutlined } from '@ant-design/icons';
import MiTabla from "./MiTabla";

const App: React.FC = () => {

  return (
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, backgroundColor: "#343D4C" }}>
          <Row justify="end" align="middle" style={{ height: '100%' }}>
                <Col>
                  <Button type="link" style={{ color: 'white' }}>Inicio</Button>
                </Col>
                <Col>
                  <Button type="link" style={{ color: 'white' }}>Notificaciones</Button>
                </Col>
                <Col>
                  <Button type="link" style={{ color: 'white' }}>Contacto</Button>
                </Col>
              </Row>
        </Header>

    <div style={{ width: '100%', margin: 0 }}>
      <img 
        src="https://cdn-3.expansion.mx/dims4/default/d475bd3/2147483647/strip/true/crop/1024x538+0+144/resize/1200x630!/format/jpg/quality/80/?url=https://cdn-3.expansion.mx/e3/61/558997a447c2bf585d8cd56feb56/estos-son-los-15-paises-mas-contaminantes-del-mundo-en-que-lugar-esta-mexico.jpeg"
        alt="Imagen debajo del Header"
        style={{ width: '100%', height: 'auto', display: 'block', marginTop: 0, backgroundColor: '#343D4C', opacity: 0.95 }}
      />
    </div>

    <Content
      className="site-layout-background"
      style={{ margin: "0 16px", padding: 24, minHeight: 'calc(100vh - 150px)' }} // Asegúrate de que el Content ocupe la altura restante
    >
      <MiTabla />
      <Outlet />

      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ insetInlineEnd: 24 }}
        icon={<MessageOutlined />}
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
    </Content>

    <div style={{ width: '100%', margin: 0 }}>
      <img 
        src="https://media.istockphoto.com/id/1442849073/photo/the-earth-space-planet-3d-illustration-background-city-lights-on-planet.jpg?s=612x612&w=0&k=20&c=M4xlet0XFVCB4tLHgI3htTPNoemokpJxpmdUqpVBndU="
        alt="Imagen encima del Footer"
        style={{ width: '100%', height: 'auto', display: 'block', marginBottom: 0, backgroundColor: '#343D4C', opacity: 0.85 }}
      />
    </div>

    <Footer style={{ textAlign: "center", backgroundColor: "#25467F", color: 'white' }}>
      Copyright @ Carlos Zapata
    </Footer>
  </Layout>
  );
};

export default App;