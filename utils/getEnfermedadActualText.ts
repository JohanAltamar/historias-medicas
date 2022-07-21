import { INITIAL_FORM_DATA } from "../constants";

export const getEnfermedadActualText = (
  formFields: typeof INITIAL_FORM_DATA
): string => {
  const {
    sexo,
    anosEdad,
    mesesEdad,
    nombreAcompanante,
    parentescoAcompanante,
    informacionParto,
    pesoNacimiento,
    tallaNacimiento,
    pcNacimiento,
    ucinNacimiento,
    paiCompleto,
    paiCarnet,
    alimentacion,
    problemasSociales,
    vivecon,
    mascotas,
    justificacionMascotas,
    relacionFamiliar,
    signosViolencia,
    faltaPadres,
    escuela,
    justificacionEscuela,
    covidContacto,
    antecedentesPatologicos,
    antecedentesQuirurgicos,
    antecedentesAlergicos,
    antecedentesToxicologicos,
    antecedentesFamiliares,
    antecedentesHospitalarios,
    antecedentesPsiquiatricosPadres,
    antecedentesSuicidiosFamilia,
    citaOdontologia,
    desparasitacion,
  } = formFields;

  const edadAnos = anosEdad !== "0" ? `${anosEdad} años` : "";
  const edadMeses = mesesEdad !== "0" ? `y ${mesesEdad} meses` : "";
  const edad = `${edadAnos} ${edadMeses}`;

  const tallaNacimientoText = tallaNacimiento
    ? `talla: ${tallaNacimiento} cm`
    : "talla: no recuerda";
  const pcNacimientoText = pcNacimiento
    ? `PC: ${pcNacimiento}`
    : "PC: no recuerda";
  const ucinNacimientoText = ucinNacimiento
    ? "Requirió reanimación o UCIN"
    : "No requirió reanimación ni UCIN";

  const paiCompletoText = `PAI ${
    paiCompleto ? "" : "NO"
  } completo para la edad hasta los 18 meses`;
  const paiCarnetText = paiCarnet
    ? "se verifica en carnet"
    : "no se pudo verificar en carnet";

  const problemasSocialesText = `${
    problemasSociales ? "Presenta" : "No presenta"
  } problemas de socialización`;

  const tieneMascotasText = mascotas
    ? `, tiene mascotas (${justificacionMascotas})`
    : ", no tiene mascotas";

  const buenaRelacionFamiliar = relacionFamiliar ? "" : "NO";
  const escolaridadText =
    escuela === "si" ? `está escolarizada en ${justificacionEscuela}` : "";

  const contactoCovid = covidContacto ? "Tuvo" : "Niega";

  const antecedentesPatologicosText = antecedentesPatologicos || "niega";
  const antecedentesQuirurgicosText = antecedentesQuirurgicos || "niega";
  const antecedentesToxicologicosText = antecedentesToxicologicos || "niega";
  const antecedentesAlergicosText = antecedentesAlergicos || "niega";
  const antecedentesPsiquiatricosPadresText =
    antecedentesPsiquiatricosPadres ||
    "niega antecedentes psiquiatricos de los padres";
  const antecedentesSuicidiosFamiliaText =
    antecedentesSuicidiosFamilia ||
    "niega antecedentes de suicidios en la familia";
  const antecedentesFamiliaresText = `${
    antecedentesFamiliares || "niega"
  } (${antecedentesPsiquiatricosPadresText} - ${antecedentesSuicidiosFamiliaText})`;
  const antecedentesHospitalariosText = antecedentesHospitalarios || "niega";

  const ultimaCitaOdontologiaText = `${
    citaOdontologia && edadAnos !== "0"
      ? "Ultima cita con odontologia " + citaOdontologia
      : "No ha tenido cita con odontologia"
  }`;

  const ultimaDesparasitacionText = `${
    desparasitacion && edadAnos !== "0"
      ? "Ultima dosis de antiparasitario " + desparasitacion
      : "No ha tenido"
  }`;

  const signosViolenciaText = signosViolencia
    ? "XXXXXXXXXXXXXXXXX"
    : "no hay signos de violencia física, maltrato o negligencia";

  const faltaPadresText = faltaPadres
    ? "Padres divorciados"
    : "Niega falta o divorcio de los padres";

  const text = `Paciente ${sexo} de ${edad}, en compañía de su ${parentescoAcompanante} ${nombreAcompanante}, ${informacionParto}. Peso al nacer: ${pesoNacimiento} gramos, ${tallaNacimientoText}, ${pcNacimientoText}, ${ucinNacimientoText}. ${paiCompletoText}, ${paiCarnetText}. ${alimentacion}. ${problemasSocialesText}, ${vivecon}${tieneMascotasText}. Refiere ${parentescoAcompanante} ${buenaRelacionFamiliar} adecuada relación familiar, ${signosViolenciaText}, ${faltaPadresText}, ${escolaridadText}. ${contactoCovid} contacto estrecho con persona sospechosa o confirmada para COVID-19 en los últimos 14 días. Antecedentes personales: - Patológicos: ${antecedentesPatologicosText}. - Quirúrgicos: ${antecedentesQuirurgicosText}. - Toxicológicos: ${antecedentesToxicologicosText}. - Alérgicos: ${antecedentesAlergicosText}. - Familiares: ${antecedentesFamiliaresText}. - Hospitalarios: ${antecedentesHospitalariosText}. ${ultimaDesparasitacionText}. ${ultimaCitaOdontologiaText}`;

  return text;
};
