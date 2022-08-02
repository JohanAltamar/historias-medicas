import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
// Components
import { Input } from "../../components/Form/Input";
import { MainLayout } from "../../components/templates";
// Types
import { IConcepto } from "../../models";

const initialState = {
  medico: "luzlopez",
  documento: "",
  especialidad: "",
};

const ConceptosPage = () => {
  const [nuevoConcepto, setNuevoConcepto] = useState(initialState);
  const [conceptos, setConceptos] = useState<IConcepto[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoConcepto({
      ...nuevoConcepto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/conceptos", nuevoConcepto);
      await fetchConceptos();
      setNuevoConcepto(initialState);
    } catch (error) {
      console.log("Algo salio mal");
    }
  };

  const handleCompleteConcepto = async (idConcepto: string) => {
    try {
      await axios.put(`/api/conceptos/${idConcepto}`);
      await fetchConceptos();
    } catch (error) {
      console.log("Algo salio mal");
    }
  };

  const fetchConceptos = useCallback(async () => {
    const res = await axios.get("/api/conceptos");
    setConceptos(res.data.conceptos);
  }, []);

  useEffect(() => {
    fetchConceptos();
  }, [fetchConceptos]);

  return (
    <MainLayout title="Conceptos | Historias Médicas">
      <h1 className="text-3xl font-bold text-center my-5">Conceptos</h1>
      <form
        className="flex mx-auto justify-center border-b border-gray-100 pb-5 mb-5"
        onSubmit={handleSubmit}
      >
        <Input
          required
          placeholder="Documento"
          name="documento"
          onChange={handleChange}
          value={nuevoConcepto.documento}
          autoComplete="off"
        />
        <Input
          required
          placeholder="Especialidad"
          name="especialidad"
          onChange={handleChange}
          value={nuevoConcepto.especialidad}
        />
        <button className="p-2 px-4 bg-blue-400 hover:bg-blue-500 transition-all ml-2 text-gray-100 font-semibold rounded-md">
          Agregar Concepto
        </button>
      </form>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-10 overflow-y-auto h-[calc(100vh-56px-56px-84px-54px)]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Fecha
              </th>
              <th scope="col" className="py-3 px-6">
                Documento
              </th>
              <th scope="col" className="py-3 px-6">
                Especialidad
              </th>
              <th scope="col" className="py-3 px-6">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {conceptos
              .filter((concepto) => !concepto.completo)
              .map(({ _id: id, fecha, documento, especialidad }) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={id}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {new Date(fecha).toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </th>
                  <td className="py-4 px-6">{documento}</td>
                  <td className="py-4 px-6 capitalize">{especialidad}</td>
                  <td className="py-4 px-6">
                    <button
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => handleCompleteConcepto(id)}
                    >
                      Hecho
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default ConceptosPage;
