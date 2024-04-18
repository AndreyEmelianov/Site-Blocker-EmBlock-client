import clsx from "clsx";
import Link from "next/link";

export type UiLinkProps = {} & Parameters<typeof Link>[0];

export function UiLink({ className, ...props }: UiLinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "p-1 text-cyan-500 hover:text-cyan-600 cursor-pointer",
      )}
    />
  );
}
