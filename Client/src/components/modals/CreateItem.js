
import { useState } from "react";
import { Form, Button, Modal} from "react-bootstrap";
import { createOneItem } from "../../http/itemAPI";

const CreateItem = ({show, onHide}) => {
  const [price, setPrice] = useState(0)
  const [name, setName] = useState('')
  const [description, setDescriptiopn] = useState('')
  const [img, setImg] = useState(null)
  const [quantity, setQuantity] = useState(0);
  const selectFile = (e) =>{
      setImg(e.target.files[0])
  }
  const addItem = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('description', description);
    formData.append('img', img);
    formData.append('quantity', quantity);
    createOneItem(formData).then(data=>onHide())
  }
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
        <Form>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-3"
          placeholder= {"Введите название товара"}
        />
        <Form.Control
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="mt-3"
          placeholder= {"Введите цену товара"}
          type="number"
          step ={0.01}
        />
        <Form.Control
          value={description}
          onChange={(e) => setDescriptiopn(e.target.value)}
          className="mt-3"
          placeholder= {"Введите описание товара"}
        />
        <Form.Control
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-3"
          placeholder= {"Введите количество товаров на складе"}
          type="number"
        />     
        <Form.Control
          className="mt-3"
          placeholder= {"Выберите изображение товара"}
          onChange={selectFile}
          type="file"
        />         
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant='outline-danger'>Закрыть</Button>
        <Button onClick={() =>addItem()} variant='outline-success'>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CreateItem;