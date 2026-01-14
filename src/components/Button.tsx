export const Button = ({
  label,
  onClick,
  disabled,
}: {
  label: string | React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={
        "bg-[#2563EB] text-white rounded-md py-2 px-4" +
        (disabled
          ? " opacity-50 cursor-not-allowed"
          : "cursor-pointer hover:bg-[#1E40AF] transition-colors")
      }
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
