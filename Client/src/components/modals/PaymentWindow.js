
import { useState } from "react";
import { Form, Button, Modal, Image, Col} from "react-bootstrap";

const PaymentWindow = ({show, onHide, sum, result, message}) => {
  return (
    //Модальное окно вывода результата
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Результат оплаты
        </Modal.Title>
      </Modal.Header>
      {result === 1 ? 
      <Modal.Body>
        <Col className="justify-content-center align-items-center d-flex">
        <Image width={100} height ={100} src = {'successMark.png'}></Image>
         </Col>
         <h1 className="justify-content-center align-items-center d-flex">Успешно</h1>
         <h1 className="justify-content-center align-items-center d-flex">Оплачено {sum} Руб.</h1>
      </Modal.Body>
      :
        <Modal.Body>
        <Col className="justify-content-center align-items-center d-flex">
        <Image width={100} height ={100} src = {'failureMark.png'}></Image>
         </Col>
         <h1 className="justify-content-center align-items-center d-flex">Неуспешно</h1>
         <h1 className="justify-content-center align-items-center d-flex">{message}</h1>
      </Modal.Body>
}
      <Modal.Footer>
        <Button onClick={onHide} variant='outline-success'>Ок</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PaymentWindow;