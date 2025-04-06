"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      {/* Esquerda */}
      <div className="flex items-center gap-10">
        <Image src={"/logo.svg"} width={173} height={39} alt="Finance AI" />
        <Link
          href={"/"}
          className={
            pathname === "/"
              ? "border-b-2 border-primary border-teal-500 text-primary transition duration-300 ease-in-out"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href={"/Transactions"}
          className={
            pathname === "/Transactions"
              ? "border-b-2 border-primary border-teal-500 text-primary transition duration-300 ease-in-out"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href={"/Subscription"}
          className={
            pathname === "/Subscription"
              ? "border-b-2 border-primary border-teal-500 text-primary transition duration-300 ease-in-out"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>

      {/* Direita */}
      <UserButton showName />
    </nav>
  );
};

export default NavBar;
