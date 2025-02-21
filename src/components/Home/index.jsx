import { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export function Home() {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');
    const [email, setEmail] = useState('');
  return (
    <>
    <h3 className="color-dark p-2 m-2">Ficha de cadastro</h3>
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
        <FormGroup>
        <Label for="nome">Nome: </Label>
          <Input
          invalid={nome === '' ? true : false} 
          placeholder="Digite o nome do pet"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
        <Label for="nome">Selecione o tipo de animal: </Label>
          <Input
          invalid={tipo === '' ? true : false} 
          placeholder="Selecione o tipo de animal:"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
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
    </>
  );
}
