import { UiHeader } from "@/shared/ui/ui-header";
import { ToggleBlockingButton } from "@/features/toggle-blocking";
import { Profile } from "@/widgets/profile";
import { useBlockListQuery } from "@/entities/block-list";
import { AddBlockItemForm, BlockList } from "@/features/block-list";

export function HomePage() {
  const { data } = useBlockListQuery({});
  return (
    <div className={`min-h-screen flex flex-col`}>
      <UiHeader right={<Profile />} />
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-12">
          <ToggleBlockingButton />
        </aside>
        <main className="pt-10 px-5">
          <h1 className="text-2xl mb-10">Your Block List</h1>
          <AddBlockItemForm />
          <BlockList className="mt-6" />
        </main>
      </div>
    </div>
  );
}
