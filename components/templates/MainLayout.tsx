import React, { FC } from "react";
import Head from "next/head";
// Components
import { Navbar } from "../Navbar";

export interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  title = "Historias Médicas",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};
