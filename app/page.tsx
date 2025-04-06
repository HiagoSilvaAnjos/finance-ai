import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavBar from "./_components/navbar";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/Login");
  }

  return (
    <>
      <NavBar />
      <div className="flex h-full items-center justify-center">
        <UserButton showName />
      </div>
    </>
  );
};

export default Home;
