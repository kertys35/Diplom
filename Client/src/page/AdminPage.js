import React, { useState } from "react";
import { Container, Button} from "react-bootstrap";
import CreateItem from "../components/modals/CreateItem"

const AdminPage = () => {
  const [itemVisible, setItemVisible] = useState(false)
  return (
<Container className="d-flex flex-column mt-3">
  <Button variant="outline-dark" className="mt-2 p-2" onClick={() => setItemVisible(true)}>Добавить товар</Button>
  <CreateItem show = {itemVisible} onHide={() => setItemVisible(false)}/>
</Container>
  );
}

export default AdminPage;