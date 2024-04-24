import { UiSelectField } from "@/shared/ui/ui-select-field";
import { useBlockItemForm } from "../model/use-block-item-form";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  {
    label: "WebSite",
    value: AddBlockItemDtoType.Website,
  },
  {
    label: "KeyWord",
    value: AddBlockItemDtoType.KeyWord,
  },
];

export function AddBlockItemForm() {
  const { handleSubmit, register, isLoading, type } = useBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="grow min-w-[200px]"
        selectProps={{ ...register("type") }}
        options={typeOptions}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder:
            type === "Website" ? "Enter WebSite Url" : "Enter Key Word",
          ...register("data"),
        }}
      />
      <UiButton variant="primary" disabled={isLoading}>
        Add Block Item
      </UiButton>
    </form>
  );
}
