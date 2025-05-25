
import { useState } from "react";
import { Form, Button, Modal} from "react-bootstrap";

const CreateItem = ({show, onHide}) => {
  return (
    //Модальное окно добавления новых товаров
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant='outline-danger'>Закрыть</Button>
        <Button onClick={() =>addItem()} variant='outline-success'>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CreateItem;