import { UiTextField } from "@/shared/ui/ui-text-field";
import { useBlockItems } from "../model/use-block-items";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { BlockItem } from "./block-item";

export function BlockList({ className }: { className?: string }) {
  const { items, isLoading, q, setQ } = useBlockItems();

  const isLoader = isLoading;
  const isEmptyText = !isLoading && items.length === 0;
  const isItems = items.length > 0;

  return (
    <div className={className}>
      <UiTextField
        className="mb-3"
        label="Search..."
        inputProps={{ value: q, onChange: (event) => setQ(event.target.value) }}
      />

      <div className="flex flex-col gap-4 rounded-xl bg-slate-100/50 px-10 py-6">
        {isLoader && <UiSpinner className="text-cyan-500 w-10 h-10 mx-auto" />}
        {isEmptyText && (
          <div className="text-xl py-2 text-center">Block list is empty...</div>
        )}
        {isItems && items.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
