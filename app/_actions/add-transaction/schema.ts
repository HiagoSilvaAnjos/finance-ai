import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const upsertTransactionSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O nome é obrigatório.",
  }),

  amount: z.preprocess(
    (val) => (val === null || val === "" ? undefined : val),
    z
      .number({
        required_error: "O valor é obrigatório",
        invalid_type_error: "O valor deve ser um número válido",
      })
      .positive({
        message: "O valor deve ser positivo",
      }),
  ),

  type: z.nativeEnum(TransactionType, {
    required_error: "O tipo é obrigatório.",
  }),

  category: z.nativeEnum(TransactionCategory, {
    required_error: "A categoria é obrigatório.",
  }),

  paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
    required_error: "O tipo de pagamento é obrigatório.",
  }),

  date: z.date({
    required_error: "A data é obrigatório.",
  }),
});
