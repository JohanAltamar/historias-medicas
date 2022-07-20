// Layouts
import { MainLayout } from "../../components/templates";
// Components
import { Fieldset } from "../../components/Form/Fieldset";
import { Input } from "../../components/Form/Input";
import { RadioButton } from "../../components/Form/RadioButton";
import { Select } from "../../components/Form/Select";
// Constants
import { MONTHS, YEARS } from "../../constants";

const CyDPage = () => {
  return (
    <MainLayout title="Crecimiento y Desarrollo | Historias Médicas">
      <h1 className="text-3xl font-bold text-center my-5">
        Crecimiento y Desarrollo
      </h1>
      <form className="px-4">
        <Fieldset required legend="1. Sexo">
          <RadioButton
            label="Masculino"
            name="gender"
            id="male"
            value="masculino"
          />
          <RadioButton
            label="Femenino"
            name="gender"
            id="female"
            value="femenino"
          />
        </Fieldset>
        <Fieldset required legend=" 2. Edad">
          <div className="flex items-center">
            <Select
              selectFirst
              label="Años"
              id="age"
              name="age"
              options={YEARS}
            />
            <span className="mx-2">y</span>
            <Select
              selectFirst
              label="Meses"
              id="months"
              name="months"
              options={MONTHS}
            />
          </div>
        </Fieldset>
        <Fieldset required legend="3. Acompañante">
          <Input id="guardianName" label="Nombre" />
          <Input id="guardianRelationship" label="Parentesco" />
        </Fieldset>
      </form>
    </MainLayout>
  );
};

export default CyDPage;
