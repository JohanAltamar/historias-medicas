import type { NextApiRequest, NextApiResponse } from "next";
// db
import { db } from "../../../database";
// models
import { Concepto } from "../../../models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case "GET":
      return await getConceptos(req, res);
    case "POST":
      return await createConcepto(req, res);
  }
  await res.status(200).json({ products: [] });
}

const getConceptos = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    await db.connect();

    const conceptos = await Concepto.find();

    await db.disconnect();

    return await res.status(200).json({ conceptos });
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return await res.status(500).json({ error });
  }
};

const createConcepto = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  try {
    await db.connect();

    const concepto = new Concepto(req.body);

    await concepto.save();

    await db.disconnect();

    return await res.status(200).json({ concepto });
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return await res.status(500).json({ error });
  }
};
