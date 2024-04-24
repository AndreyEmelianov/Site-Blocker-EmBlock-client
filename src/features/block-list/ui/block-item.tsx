import { useRemoveBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";

export function BlockItem({
  id,
  data,
  type,
}: {
  id: number;
  type: AddBlockItemDtoType;
  data: string;
}) {
  const removeBlockItemMutation = useRemoveBlockItemMutation();
  const handleRemoveItem = () => {
    removeBlockItemMutation.mutate(id);
  };

  return (
    <div className="flex gap-2">
      <div>
        <div className="text-lg">{data}</div>
        <div className="text-slate-500">{type}</div>
      </div>

      <button
        className="ml-auto text-rose-500 hover:text-rose-600 cursor-pointer disabled:opacity-50 p-1"
        onClick={handleRemoveItem}
        disabled={removeBlockItemMutation.isLoading}
      >
        <RemoveIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

const RemoveIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
      />
    </svg>
  );
};
