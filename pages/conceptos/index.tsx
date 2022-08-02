import React from "react";
import { Input } from "../../components/Form/Input";
import { MainLayout } from "../../components/templates";

const ConceptosPage = () => {
  return (
    <MainLayout title="Conceptos | Historias Médicas">
      <h1 className="text-3xl font-bold text-center my-5">Conceptos</h1>
      <div className="flex mx-auto justify-center border-b border-gray-100 pb-5 mb-5">
        <Input placeholder="Documento" />
        <Input placeholder="Especialidad" />
        <button className="p-2 px-4 bg-blue-400 hover:bg-blue-500 transition-all ml-2 text-gray-100 font-semibold rounded-md">
          Agregar Concepto
        </button>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-10">
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                01-08-2022
              </th>
              <td className="py-4 px-6">1143589633</td>
              <td className="py-4 px-6">Ortopedia</td>
              <td className="py-4 px-6">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Hecho
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default ConceptosPage;
