import Image from "next/image";
import { Inter } from "next/font/google";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";

const inter = Inter({ subsets: ["latin"] });

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.email}
      <UiButton variant="primary">prim</UiButton>
      <UiButton variant="secondary">sec</UiButton>
      <UiButton variant="outlined">out</UiButton>
      <UiButton disabled variant="primary">
        disabled
      </UiButton>
    </main>
  );
}
