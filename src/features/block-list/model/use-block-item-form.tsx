import { useForm } from "react-hook-form";

import { useAddBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";

export function useBlockItemForm() {
  const { handleSubmit, register, watch } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>();

  const addBlockItemMutation = useAddBlockItemMutation();

  const type = watch("type");

  return {
    handleSubmit: handleSubmit((data) => addBlockItemMutation.mutate(data)),
    isLoading: addBlockItemMutation.isLoading,
    register,
    type,
  };
}
