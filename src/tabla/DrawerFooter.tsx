import { Button, Row, Col } from "antd";
import React from "react";

interface DrawerFooterProps {
    createRecord?: () => void;
  }

const DrawerFooter: React.FC<DrawerFooterProps> = ({ createRecord }) => {
  return (
    <Row justify="space-between">
      <Col>
        <Button type="default">Cancelar</Button>
      </Col>
      <Col>
        <Button type="primary" onClick={createRecord}>
          Guardar
        </Button>
      </Col>
    </Row>
  );
};
export default DrawerFooter;