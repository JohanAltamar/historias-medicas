import mongoose, { Model, Schema } from "mongoose";

export interface IConcepto {
  _id: string;
  documento: string;
  especialidad: string;
  fecha: number;
  medico: string;
  completo: boolean;
}

const ConceptoSchema = new Schema({
  documento: { type: String, required: true },
  especialidad: { type: String, required: true },
  fecha: { type: Number, required: false, default: Date.now() },
  medico: { type: String, required: true },
  completo: { type: Boolean, default: false },
});

const ConceptoModel: Model<IConcepto> =
  mongoose.models.Concepto || mongoose.model("Concepto", ConceptoSchema);

export default ConceptoModel;
