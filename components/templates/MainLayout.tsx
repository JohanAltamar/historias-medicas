import Head from "next/head";
import React, { FC } from "react";

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
      {/* NAVBAR */}
      <main>{children}</main>
    </>
  );
};
