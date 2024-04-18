import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";

export function useSignOut() {
  const router = useRouter();

  const signOutMutations = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.push(ROUTES.SIGN_IN);
    },
  });

  return {
    isLoading: signOutMutations.isLoading,
    signOut: signOutMutations.mutate,
  };
}
