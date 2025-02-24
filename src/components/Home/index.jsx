import { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input, Button
} from "reactstrap";

import { FormsPets } from '../FormsPets/index'


export function Home() {
    const [nome, setNome] = useState('');
    const [tutor, setTutor] = useState('');
    const [idade, setIdade] = useState(0);
    const [email, setEmail] = useState('');
  return (
    <>
    <h3 className="color-dark p-4">Ficha de cadastro</h3>
      <Form>
        <FormGroup>
          <Label for="nome">Nome: </Label>
          <Input
          invalid={nome === '' ? true : false} 
          placeholder="Digite o nome do pet"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          />
        </FormGroup>
        <FormGroup style={{ width: '100px' }}>
          <Label for="nome">Idade: </Label>
          <Input
          invalid={idade === 0 ? true : false} 
          placeholder="Digite a idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          />
        </FormGroup>
        <FormsPets />
        <FormGroup>
        <Label for="nome">Nome do tutor: </Label>
          <Input
          invalid={tutor === '' ? true : false} 
          placeholder="Digite o nome do tutor"
          value={tutor}
          onChange={(e) => setTutor(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
        <Label for="nome">E-Mail: </Label>
          <Input
          invalid={email === '' ? true : false} 
          placeholder="Digite o email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
      </Form>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Button style={{ borderRadius: '6px'}} size="20px" color="success">
          Confirmar
        </Button>
        <Button style={{ borderRadius: '6px'}} size="20px" color="danger">
          Cancelar
        </Button>
      </div>
    </>
  );
}
