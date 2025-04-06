import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavBar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/Login");
  }

  return (
    <>
      <NavBar />
      <SummaryCards />
    </>
  );
};

export default Home;
