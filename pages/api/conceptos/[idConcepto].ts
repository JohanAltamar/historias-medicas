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
    case "PUT":
      return await completeConceptos(req, res);
  }
  await res.status(200).json({ products: [] });
}

const completeConceptos = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  try {
    const { idConcepto } = req.query;
    await db.connect();

    await Concepto.findOneAndUpdate({ _id: idConcepto }, { completo: true });

    await db.disconnect();

    return await res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return await res.status(500).json({ error });
  }
};
