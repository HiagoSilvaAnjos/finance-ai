"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactioTypeBadge from "../_components/type-badge";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};

// export const TRANSACTION_TYPE_OPTIONS = [
//   {
//     value: TransactionType.EXPENSE,
//     label: "Despesa",
//   },
//   {
//     value: TransactionType.DEPOSIT,
//     label: "Depósito",
//   },
//   {
//     value: TransactionType.INVESTMENT,
//     label: "Investimento",
//   },
// ];

// export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
//   {
//     value: TransactionPaymentMethod.BANK_TRANSFER,
//     label:
//       TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
//   },
//   {
//     value: TransactionPaymentMethod.BANK_SLIP,
//     label:
//       TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
//   },
//   {
//     value: TransactionPaymentMethod.CASH,
//     label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
//   },
//   {
//     value: TransactionPaymentMethod.CREDIT_CARD,
//     label:
//       TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
//   },
//   {
//     value: TransactionPaymentMethod.DEBIT_CARD,
//     label:
//       TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
//   },
//   {
//     value: TransactionPaymentMethod.OTHER,
//     label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
//   },
//   {
//     value: TransactionPaymentMethod.PIX,
//     label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
//   },
// ];

// export const TRANSACTION_CATEGORY_OPTIONS = [
//   {
//     value: TransactionCategory.EDUCATION,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
//   },
//   {
//     value: TransactionCategory.ENTERTAINMENT,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
//   },
//   {
//     value: TransactionCategory.FOOD,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
//   },
//   {
//     value: TransactionCategory.HEALTH,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
//   },
//   {
//     value: TransactionCategory.HOUSING,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
//   },
//   {
//     value: TransactionCategory.OTHER,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
//   },
//   {
//     value: TransactionCategory.SALARY,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
//   },
//   {
//     value: TransactionCategory.TRANSPORTATION,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
//   },
//   {
//     value: TransactionCategory.UTILITY,
//     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
//   },
// ];

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      return <TransactioTypeBadge transaction={transaction} />;
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: () => {
      return (
        <div>
          <Button
            size="icon"
            variant={"ghost"}
            className="space-x-1 text-muted-foreground"
          >
            <PencilIcon />
          </Button>
          <Button
            size="icon"
            variant={"ghost"}
            className="space-x-1 text-muted-foreground"
          >
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
