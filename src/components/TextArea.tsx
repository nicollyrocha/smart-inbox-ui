export const TextArea = ({
  value,
  onChange,
  file,
  placeholder = "",
}: {
  value: string;
  onChange: (newValue: string) => void;
  file?: File | null;
  placeholder?: string;
}) => {
  return (
    <textarea
      placeholder={placeholder}
      className={
        "w-full h-40 border border-[#D1D5DB] rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB]" +
        (file ? " opacity-50 cursor-not-allowed" : "")
      }
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={!!file}
    />
  );
};
