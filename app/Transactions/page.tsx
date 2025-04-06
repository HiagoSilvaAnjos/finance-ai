import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import { auth } from "@clerk/nextjs/server";
import { Transaction } from "@prisma/client";
import { redirect } from "next/navigation";

const TransactionsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/Login");
  }

  const transactions: Transaction[] = await db.transaction.findMany({
    where: {
      userId: userId,
    },
  });
  return (
    <>
      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between text-2xl">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable
          columns={transactionColumns}
          data={JSON.parse(JSON.stringify(transactions))}
        />
      </div>
    </>
  );
};

export default TransactionsPage;
