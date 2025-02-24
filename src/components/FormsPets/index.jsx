import { useState, useEffect } from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

export function FormsPets() {
  const [sexo, setSexo] = useState(["Masculino", "Feminino"]);
  const [tipo, setTipo] = useState(['']);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await fetch("https://api.npoint.io/449641724ca9c26251e6");
       
        const data = await response.json();
        console.log("Dados da API:", data);

        if (data.pets && Array.isArray(data.pets)) {
          setTipo(data.pets); // Define o array diretamente no estado
        } else {
          throw new Error("Formato de resposta inválido");
        }

      } catch (error) {
        setError(error.message);
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchPets();
  }, []);

  return (
    <>
      {error && <p style={{ color: "red" }}>Erro: {error}</p>}

      <FormGroup row>
        <Label for="sexoSelect">Sexo: </Label>
        <Col sm={4}>
          <Input type="select" id="sexoSelect">
            {sexo.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="tipoSelect">Tipo: </Label>
        <Col sm={4}>
          <Input type="select" id="tipoSelect">
            <option value="">Selecione um tipo</option>
            {tipo.length > 0 ? (
              tipo.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))
            ) : (
              <option disabled>Carregando...</option>
            )}
          </Input>
        </Col>
      </FormGroup>
    </>
  );
}
