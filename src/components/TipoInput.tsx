import React from "react";
import { Form, RadioButtonGroupInput, TextInput, required, useInput } from "react-admin";

const TipoInput = (props: any) => {
  const tipoInput = useInput(props);

  const handleDocumentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");

    // Formatação do CPF
    if (tipoInput.id === "F") {
      const formattedValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      tipoInput.input.onChange(formattedValue);
    }
    // Formatação do CNPJ
    else if (tipoInput.id === "J") {
      const formattedValue = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        tipoInput.input.onChange(formattedValue);
    }
  };

  return (
    <Form>
      <RadioButtonGroupInput
        source="tipo"
        optionText="label"
        choices={[
          { id: 'F', label: 'Fisico' },
          { id: 'J', label: 'Juridico' },
        ]}
        {...tipoInput}
      />
      <TextInput
        source="documento"
        label="CPF/CNPJ"
        onChange={handleDocumentoChange}
      />
    </Form>
  );
};

export default TipoInput;
