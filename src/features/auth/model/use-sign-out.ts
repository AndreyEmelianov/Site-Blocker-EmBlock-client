import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useResetSession } from "@/entities/session";

export function useSignOut() {
  const resetSession = useResetSession();
  const router = useRouter();

  const signOutMutations = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.push(ROUTES.SIGN_IN);
      resetSession();
    },
  });

  return {
    isLoading: signOutMutations.isLoading,
    signOut: signOutMutations.mutate,
  };
}
