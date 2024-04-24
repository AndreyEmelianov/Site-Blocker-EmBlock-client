import { useForm } from "react-hook-form";

import { useAddBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";

export function useBlockItemForm() {
  const { handleSubmit, register, watch, reset } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>({
    defaultValues: {
      type: AddBlockItemDtoType.Website,
    },
  });

  const addBlockItemMutation = useAddBlockItemMutation();

  const type = watch("type");

  return {
    handleSubmit: handleSubmit((data) => {
      addBlockItemMutation.mutate(data, {
        onSuccess() {
          reset();
        },
      });
    }),
    isLoading: addBlockItemMutation.isLoading,
    register,
    type,
  };
}
