import React from "react";
import {
  CheckboxGroupInput,
  NumberInput,
  ReferenceArrayInput,
  useDataProvider,
} from "react-admin";

const ServicesInput = ({...props }: any) => {
  const dataProvider = useDataProvider();

  const [selectedServices, setSelectedServices] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (selectedServices.length === 0) {
      setTotal(0);
      return;
    }

    dataProvider
      .getMany("servicos", { ids: selectedServices })
      .then((response) => {
        const servicesData = Object.values(response.data);
        const sum = servicesData.reduce(
          (total, service: any) => total + service.valor,
          0
        );
        setTotal(sum);

      });
  }, [dataProvider, selectedServices]);

  const handleSelectChange = (selected: any) => {
    setSelectedServices(selected);
  };

  return (
    <div>
      <ReferenceArrayInput
        source="servicos_id"
        reference="servicos"
      >
        <CheckboxGroupInput label="Serviços" optionText="nome" onChange={handleSelectChange} {...props}/>
      </ReferenceArrayInput>
      <div>Valor total dos serviços: R$ {total}</div>
    </div>
  );
};

export default ServicesInput;
