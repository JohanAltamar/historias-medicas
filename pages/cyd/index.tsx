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
import { useState } from "react";
import Swal from "sweetalert2";

const initialFormData = {
  sexo: "masculino",
  anosEdad: "0",
  mesesEdad: "0",
  nombreAcompanante: "",
  parentescoAcompanante: "",
  hospitalizaciones: false,
  pesoNacimiento: 0,
  tallaNacimiento: 0,
  pcNacimiento: 0,
  ucinNacimiento: false,
  paiCompleto: true,
  paiCarnet: true,
  alimentacion:
    "lactancia materna, comida del grupo familiar, carne, pollo, pescado, frutas, granos, verduras",
  problemasSociales: false,
  vivecon: "",
  mascotas: true,
  justificacionMascotas: "",
  relacionFamiliar: true,
  signosViolencia: false,
  faltaPadres: false,
  escuela: "no",
  covidContacto: false,
  antecedentesPatologicos: "",
  antecedentesQuirurgicos: "",
  antecedentesToxicologicos: "",
  antecedentesAlergicos: "",
  antecedentesFamiliares: "",
  antecedentesHospitalarios: "",
  antecedentesPsiquiatricosPadres: "",
  antecedentesSuicidiosFamilia: "",
  desparasitacion: "",
  citaOdontologia: "",
};

const CyDPage = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (
    ev: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  const handleCheckboxChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.checked });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <MainLayout title="Crecimiento y Desarrollo | Historias Médicas">
      <h1 className="text-3xl font-bold text-center my-5">
        Crecimiento y Desarrollo
      </h1>
      <form className="px-4 pb-4" onSubmit={handleSubmit}>
        <Fieldset required legend="1. Sexo">
          <RadioButton
            label="Masculino"
            name="sexo"
            id="male"
            value="masculino"
            checked={formData.sexo === "masculino"}
            onChange={handleInputChange}
          />
          <RadioButton
            label="Femenino"
            name="sexo"
            id="female"
            value="femenino"
            checked={formData.sexo === "femenino"}
            onChange={handleInputChange}
          />
        </Fieldset>
        <Fieldset required legend=" 2. Edad">
          <div className="flex items-center">
            <Select
              selectFirst
              label="Años"
              id="anos"
              name="anosEdad"
              options={YEARS}
              onChange={handleInputChange}
            />
            <span className="mx-2">y</span>
            <Select
              selectFirst
              label="Meses"
              id="meses"
              name="mesesEdad"
              options={MONTHS}
              onChange={handleInputChange}
            />
          </div>
        </Fieldset>
        <Fieldset required legend="3. Acompañante">
          <Input
            id="nombreAcompanante"
            name="nombreAcompanante"
            label="Nombre"
            onChange={handleInputChange}
            value={formData.nombreAcompanante}
          />
          <Input
            id="parentescoAcompanante"
            name="parentescoAcompanante"
            label="Parentesco"
            onChange={handleInputChange}
            value={formData.parentescoAcompanante}
          />
        </Fieldset>
        <Fieldset legend="4. Información del parto">PENDIENTE</Fieldset>
        <Fieldset required legend="5. Hospitalizaciones">
          <Checkbox
            label="SI"
            name="hospitalizaciones"
            id="hospitalizaciones"
            value="hospitalizaciones"
            onChange={handleCheckboxChange}
            checked={formData.hospitalizaciones}
          />
          {formData.hospitalizaciones && (
            <Textarea
              id="justificacionHospitalizaciones"
              name="justificacionHospitalizaciones"
              className="mt-2"
              placeholder="¿Por qué?"
              onChange={handleInputChange}
            />
          )}
        </Fieldset>
        <Fieldset legend="6. Información del nacimiento">
          <Input
            id="pesoNacimiento"
            name="pesoNacimiento"
            label="Peso al nacer:"
            type="number"
            afterInput="gramos"
            onChange={handleInputChange}
            value={formData.pesoNacimiento}
          />
          <Input
            id="tallaNacimiento"
            name="tallaNacimiento"
            label="Talla al nacer:"
            type="number"
            afterInput="cms"
            onChange={handleInputChange}
            value={formData.tallaNacimiento}
          />
          <Input
            id="pcNacimiento"
            name="pcNacimiento"
            label="PC:"
            type="number"
            afterInput="cms"
            onChange={handleInputChange}
            value={formData.pcNacimiento}
          />
          <Checkbox
            label="Requirió reanimación o UCIN"
            name="ucinNacimiento"
            id="ucinNacimiento"
            value="ucinNacimiento"
            onChange={handleCheckboxChange}
            checked={formData.ucinNacimiento}
          />
        </Fieldset>
        <Fieldset required legend="7. Vacunación">
          <Checkbox
            label="PAI completo para la edad"
            name="paiCompleto"
            id="paiCompleto"
            value="paiCompleto"
            onChange={handleCheckboxChange}
            checked={formData.paiCompleto}
          />
          <Checkbox
            label="Se verifica/trae carnet"
            name="paiCarnet"
            id="paiCarnet"
            value="paiCarnet"
            onChange={handleCheckboxChange}
            checked={formData.paiCarnet}
          />
        </Fieldset>
        <Fieldset required legend="8. Alimentación">
          <Textarea
            className="w-full"
            id="alimentacion"
            name="alimentacion"
            value={formData.alimentacion}
            onChange={handleInputChange}
          />
        </Fieldset>
        <Fieldset legend="9. Sociales">
          <Checkbox
            label="Presenta problemas de socialización"
            name="problemasSociales"
            id="problemasSociales"
            value="problemasSociales"
            onChange={handleCheckboxChange}
            checked={formData.problemasSociales}
          />
          <Textarea
            className="w-full"
            label="Vive con:"
            id="vivecon"
            name="vivecon"
            placeholder="¿Con quién vive?"
            value={formData.vivecon}
            onChange={handleInputChange}
          />
          <Checkbox
            label="Tiene mascotas"
            name="mascotas"
            id="mascotas"
            value="mascotas"
            onChange={handleCheckboxChange}
            checked={formData.mascotas}
          />
          {formData.mascotas && (
            <Textarea
              className="w-full mt-2"
              id="justificacionMascotas"
              name="justificacionMascotas"
              placeholder="Si tiene mascotas, ¿Cuáles y cuántas?"
              value={formData.justificacionMascotas}
              onChange={handleInputChange}
            />
          )}
          <Checkbox
            label="Adecuada relación familiar"
            name="relacionLaboral"
            id="relacionLaboral"
            value="relacionLaboral"
            onChange={handleCheckboxChange}
            checked={formData.relacionFamiliar}
          />
          <Checkbox
            label="Hay signos de maltrato, violencia física, negligencia"
            name="signosViolencia"
            id="signosViolencia"
            value="signosViolencia"
            onChange={handleCheckboxChange}
            checked={formData.signosViolencia}
          />
          <Checkbox
            label="Pérdida o divorcio de los padres"
            name="faltaPadres"
            id="faltaPadres"
            value="faltaPadres"
            onChange={handleCheckboxChange}
            checked={formData.faltaPadres}
          />
        </Fieldset>
        <Fieldset required legend="10. Escolarización">
          <RadioButton
            label="SI"
            name="escuela"
            id="siEscuela"
            value="si"
            onChange={handleInputChange}
            checked={formData.escuela === "si"}
          />
          <RadioButton
            label="NO"
            name="escuela"
            id="noEscuela"
            value="no"
            onChange={handleInputChange}
            checked={formData.escuela === "no"}
          />
          <RadioButton
            label="No Aplica"
            name="escuela"
            id="noAplicaEscuela"
            value="no_aplica"
            onChange={handleInputChange}
            checked={formData.escuela === "no_aplica"}
          />
          {formData.escuela === "si" && (
            <Textarea
              className="w-full mt-2"
              id="justificacionEscuela"
              name="justificacionEscuela"
              placeholder="guardería desde que edad, colegio grado, etc."
            />
          )}
        </Fieldset>
        <Fieldset required legend="11. COVID">
          <Checkbox
            label="Contacto estrecho con persona sospechosa o confirmada para covid-19 en los últimos 14 días"
            name="covidContacto"
            id="covidContacto"
            value="covidContacto"
            onChange={handleCheckboxChange}
            checked={formData.covidContacto}
          />
        </Fieldset>
        <Fieldset required legend="12. Antecedentes">
          <Textarea
            className="w-full mt-2"
            id="antecedentesPatologicos"
            name="antecedentesPatologicos"
            label="Patológicos"
            onChange={handleInputChange}
            value={formData.antecedentesPatologicos}
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesQuirurgicos"
            name="antecedentesQuirurgicos"
            label="Quirúrgicos"
            onChange={handleInputChange}
            value={formData.antecedentesQuirurgicos}
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesToxicologicos"
            name="antecedentesToxicologicos"
            label="Toxicológicos"
            onChange={handleInputChange}
            value={formData.antecedentesToxicologicos}
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesAlergicos"
            name="antecedentesAlergicos"
            label="Alérgicos"
            onChange={handleInputChange}
            value={formData.antecedentesAlergicos}
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesFamiliares"
            name="antecedentesFamiliares"
            label="Familiares"
            onChange={handleInputChange}
            value={formData.antecedentesFamiliares}
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesHospitalarios"
            name="antecedentesHospitalarios"
            label="Hospitalarios"
            onChange={handleInputChange}
            value={formData.antecedentesHospitalarios}
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesPsiquiatricosPadres"
            name="antecedentesPsiquiatricosPadres"
            label="Psiquiatricos de los Padres"
            onChange={handleInputChange}
            value={formData.antecedentesPsiquiatricosPadres}
          />
          <Textarea
            className="w-full mt-2"
            id="antecedentesSuicidiosFamilia"
            name="antecedentesSuicidiosFamilia"
            label="Suicidios en la Familia"
            onChange={handleInputChange}
            value={formData.antecedentesSuicidiosFamilia}
          />
        </Fieldset>
        <Fieldset legend="13. Otros">
          <Input
            label="Última dosis antiparasitario"
            id="desparasitacion"
            name="desparasitacion"
            value={formData.desparasitacion}
            onChange={handleInputChange}
            type="date"
            disabled={formData.anosEdad === "0"}
          />
          <Input
            label="Última cita con odontología"
            id="citaOdontologia"
            name="citaOdontologia"
            value={formData.citaOdontologia}
            onChange={handleInputChange}
            type="date"
            disabled={formData.anosEdad === "0"}
          />
        </Fieldset>
        <button
          type="submit"
          className="w-full bg-blue-400 text-gray-100 font-bold rounded p-2 hover:bg-blue-500 active:bg-blue-600 transition-all duration-200 sticky bottom-5"
        >
          Vista Previa
        </button>
      </form>
    </MainLayout>
  );
};

export default CyDPage;
