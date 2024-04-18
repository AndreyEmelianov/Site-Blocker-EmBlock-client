import Image from "next/image";
import { Inter } from "next/font/google";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";

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
      <UiTextField label="filds" inputProps={{ placeholder: "email" }} />
      <UiTextField error="err" inputProps={{ placeholder: "email" }} />
      <UiTextField />
      <UiSelectField options={[{ value: "1", label: "label 1" }]} />
      <UiLink href="/">Go go</UiLink>
      <UiSpinner className="text-cyan-500 w-20 h-20" />
      <UiPageSpinner />
    </main>
  );
}
