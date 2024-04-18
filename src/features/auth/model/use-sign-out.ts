import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";

export function useSignOut() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const signOutMutations = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.push(ROUTES.SIGN_IN);
      queryClient.removeQueries(["session"]);
    },
  });

  return {
    isLoading: signOutMutations.isLoading,
    signOut: signOutMutations.mutate,
  };
}
