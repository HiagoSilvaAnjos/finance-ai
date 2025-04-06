import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

const SummaryCards = () => {
  return (
    <div className="space-y-6">
      {/* Primeiro card */}
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title={"Saldo"}
        amount={2700}
        size="large"
      />

      {/* Outros cards */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={2500}
        />

        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
          amount={2500}
        />

        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesas"
          amount={3500}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
