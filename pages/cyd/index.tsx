// Layouts
import { MainLayout } from "../../components/templates";
// Components
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
      <form>
        <fieldset className="my-5">
          <legend className="text-gray-600">Sexo</legend>
          <RadioButton
            label="Masculino"
            name="sex"
            id="male"
            value="masculino"
          />
          <RadioButton
            label="Femenino"
            name="sex"
            id="female"
            value="femenino"
          />
        </fieldset>
        <fieldset>
          <legend className="text-gray-600">Edad</legend>
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
        </fieldset>
      </form>
    </MainLayout>
  );
};

export default CyDPage;
