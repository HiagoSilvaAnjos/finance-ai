import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavBar from "../_components/navbar";

const SubscriptionPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/Login");
  }

  return (
    <div>
      <NavBar />
      <h1>Say subscription page</h1>
    </div>
  );
};

export default SubscriptionPage;
