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
            label="Requirió reanimación o UCIN"
            name="ucinNacimiento"
            id="ucinNacimiento"
          />
        </Fieldset>
        <Fieldset required legend="7. Vacunación">
          <Checkbox
            label="PAI completo para la edad"
            name="paiCompleto"
            id="paiCompleto"
          />
          <Checkbox
            label="Se verifica/trae carnet"
            name="paiCarnet"
            id="paiCarnet"
          />
        </Fieldset>
        <Fieldset required legend="8. Alimentación">
          <Textarea
            className="w-full"
            id="alimentacion"
            name="alimentacion"
            defaultValue="lactancia materna, comida del grupo familiar, carne, pollo, pescado, frutas, granos, verduras"
          />
        </Fieldset>
        <Fieldset legend="9. Sociales">
          <Checkbox
            label="Presenta problemas de socialización"
            name="problemasSociales"
            id="problemasSociales"
          />
          <Textarea
            className="w-full"
            label="Vive con:"
            id="vivecon"
            name="vivecon"
            placeholder="¿Con quién vive?"
          />
          <Checkbox label="Tiene mascotas" name="mascotas" id="mascotas" />
          <Textarea
            className="w-full mt-2"
            id="justificacionMascotas"
            name="justificacionMascotas"
            placeholder="Si tiene mascotas, ¿Cuáles y cuántas?"
          />
        </Fieldset>
        <Fieldset required legend="10. Escolarización">
          <RadioButton label="SI" name="escuela" id="siEscuela" value="si" />
          <RadioButton label="NO" name="escuela" id="noEscuela" value="no" />
          <RadioButton
            label="No Aplica"
            name="escuela"
            id="noAplicaEscuela"
            value="no_aplica"
          />
          <Textarea
            className="w-full mt-2"
            id="justificacionEscuela"
            name="justificacionEscuela"
            placeholder="guardería desde que edad, colegio grado, etc."
          />
        </Fieldset>
        <Fieldset required legend="11. COVID">
          <Checkbox
            label="Contacto estrecho con persona sospechosa o confirmada para covid-19 en los últimos 14 días"
            name="covidContacto"
            id="covidContacto"
          />
        </Fieldset>
        <Fieldset required legend="12. Antecedentes">
          <Textarea
            className="w-full mt-2"
            id="antecedentesPatologicos"
            name="antecedentesPatologicos"
            label="Patológicos"
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesQuirurgicos"
            name="antecedentesQuirurgicos"
            label="Quirúrgicos"
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesToxicologicos"
            name="antecedentesToxicologicos"
            label="Toxicológicos"
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesAlergicos"
            name="antecedentesAlergicos"
            label="Alérgicos"
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesFamiliares"
            name="antecedentesFamiliares"
            label="Familiares"
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesHospitalarios"
            name="antecedentesHospitalarios"
            label="Hospitalarios"
          />
        </Fieldset>
      </form>
    </MainLayout>
  );
};

export default CyDPage;
