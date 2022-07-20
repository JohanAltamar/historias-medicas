// Layouts
import { MainLayout } from "../../components/templates";
// Components
import { Fieldset } from "../../components/Form/Fieldset";
import { Input } from "../../components/Form/Input";
import { RadioButton } from "../../components/Form/RadioButton";
import { Select } from "../../components/Form/Select";
import { Textarea } from "../../components/Form/Textarea";
// Constants
import { MONTHS, YEARS } from "../../constants";
import { Checkbox } from "../../components/Form/Checkbox/Checkbox";

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
            name="sexo"
            id="male"
            value="masculino"
          />
          <RadioButton
            label="Femenino"
            name="sexo"
            id="female"
            value="femenino"
          />
        </Fieldset>
        <Fieldset required legend=" 2. Edad">
          <div className="flex items-center">
            <Select
              selectFirst
              label="Años"
              id="años"
              name="años"
              options={YEARS}
            />
            <span className="mx-2">y</span>
            <Select
              selectFirst
              label="Meses"
              id="meses"
              name="meses"
              options={MONTHS}
            />
          </div>
        </Fieldset>
        <Fieldset required legend="3. Acompañante">
          <Input id="nombreAcompañante" label="Nombre" />
          <Input id="parentescoAcompañante" label="Parentesco" />
        </Fieldset>
        <Fieldset legend="4. Información del parto">PENDIENTE</Fieldset>
        <Fieldset required legend="5. Hospitalizaciones">
          <RadioButton label="NO" name="hospitalizaciones" id="no" value="no" />
          <RadioButton label="SI" name="hospitalizaciones" id="si" value="si" />
          <Textarea
            id="justificacionHospitalizaciones"
            name="justificacionHospitalizaciones"
            className="mt-2"
            placeholder="¿Por qué?"
          />
        </Fieldset>
        <Fieldset legend="6. Información del nacimiento">
          <Input
            id="pesoNacimiento"
            label="Peso al nacer:"
            type="number"
            afterInput="gramos"
          />
          <Input
            id="tallaNacimiento"
            label="Talla al nacer:"
            type="number"
            afterInput="cms"
          />
          <Input id="pcNacimiento" label="PC:" type="number" afterInput="cms" />
          <Checkbox
            label="Requirió reanimación o UCI"
            name="uciNacimiento"
            id="uciNacimiento"
          />
        </Fieldset>
      </form>
    </MainLayout>
  );
};

export default CyDPage;
