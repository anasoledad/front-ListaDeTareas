import {Form, Button, ListGroup} from 'react-bootstrap'
import ListaTareas from './ListaTareas';
import { useState } from 'react';

const Formulario = () => {
  const [tarea, setTarea] = useState('');
  const [listadoTareas, setListadoTareas] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
   setListadoTareas([...listadoTareas, tarea]);
  //  console.log(e.target)
  setTarea('');
  }
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="texto" placeholder="Ingrese una tarea" onChange={(e)=> setTarea(e.target.value)}
          value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default Formulario;
