import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth";

export function HomePage() {
  return (
    <main className={`min-h-screen`}>
      <UiHeader
        right={
          <div>
            <SignOutButton />
          </div>
        }
      />
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
    </main>
  );
}
