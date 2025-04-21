import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const cookiesSesion = await cookies();
  const session = cookiesSesion.get("bearer-token");
  if (session) {
    redirect("/dashboard");
  }

  redirect("/login");
}
