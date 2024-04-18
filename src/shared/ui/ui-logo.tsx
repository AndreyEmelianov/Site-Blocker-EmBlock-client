import clsx from "clsx";

export function UiLogo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-xl")}>
      <LogoIcon className="w-12 h-12" />
      EmBlock
    </div>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 72 72"
    >
      <path
        fill="#D0CFCE"
        d="M35.99 10.906c-11.046 0-20 4.478-20 10l.026.275C18.967 51.711 34.69 60.25 35.914 60.87l.076.037s17-8 20-40c.515-5.498-8.954-10-20-10m.002 43.978l-.06-.03c-.978-.496-13.543-7.318-15.901-31.714l-.021-.22c0-4.413 7.155-7.99 15.982-7.99s16.394 3.596 15.982 7.99c-2.397 25.571-15.982 31.964-15.982 31.964"
      />
      <path
        fill="#47c4ea"
        d="m35 17.906l3 4l-3 4l3 4l-3 4l3 4l-3 4l3 4l-3 4l1 5.26s-15-11-16-32c0 0 0-8 16-8z"
      />
      <path
        fill="#207fbe"
        d="m36 15.166l-1 2.74l3 4l-3 4l3 4l-3 4l3 4l-3 4l3 4l-3 4l1.002 4.978s13.844-8.958 15.982-31.964c0 0-.834-6.97-15.984-7.754"
      />
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <path d="M35.925 60.87c-1.225-.622-16.947-9.16-19.899-39.69L16 20.906c0-5.522 8.954-10 20-10s20.516 4.502 20 10c-3 32-20 40-20 40z" />
        <path d="M35.942 54.854c-.978-.496-13.543-7.318-15.9-31.714l-.022-.22c0-4.413 7.155-7.991 15.982-7.991s16.394 3.597 15.982 7.991c-2.397 25.571-15.982 31.964-15.982 31.964z" />
      </g>
    </svg>
  );
}
