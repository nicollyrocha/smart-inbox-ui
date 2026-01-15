export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        "border rounded-md p-5 flex flex-col gap-4 md:w-lg " + (className || "")
      }
    >
      {children}
    </div>
  );
};
