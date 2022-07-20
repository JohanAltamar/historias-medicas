import type { NextPage } from "next";
import { MainLayout } from "../components/templates";

const Home: NextPage = () => {
  return (
    <MainLayout title="Inicio | Historias Médicas">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </MainLayout>
  );
};

export default Home;
