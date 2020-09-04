import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography align="center">Formulario de Cadastroa</Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
