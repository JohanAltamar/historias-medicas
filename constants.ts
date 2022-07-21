export const YEARS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
].map((year) => ({
  label: year,
  value: year,
}));

export const MONTHS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
].map((year) => ({
  label: year,
  value: year,
}));

export const INITIAL_FORM_DATA = {
  sexo: "masculino",
  anosEdad: "0",
  mesesEdad: "0",
  nombreAcompanante: "",
  parentescoAcompanante: "",
  informacionParto:
    "producto del 1mer embarazo, nació a termino por cesarea por RM. sin complicaciones durante embarazo y parto",
  hospitalizaciones: false,
  justificacionHospitalizaciones: "",
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
  justificacionEscuela: "",
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
