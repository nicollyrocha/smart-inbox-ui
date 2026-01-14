import { X } from "lucide-react";
import { useState } from "react";

export const UploadButton = ({
  onUpload,
  text,
}: {
  onUpload: (file: File | null) => void;
  text?: string;
}) => {
  const [currFile, setCurrFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCurrFile(file);
      onUpload(file);
    }
  };

  return (
    <>
      <label
        className={`border-2 border-dashed border-[#9CA3AF] rounded-md py-6 px-4 text-center ${
          text
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer hover:border-[#6B7280] transition-colors"
        }`}
      >
        Upload File
        <input
          type="file"
          accept=".txt,.pdf"
          className="hidden"
          onChange={handleFileChange}
          disabled={!!text}
        />
      </label>
      <div>
        {currFile && (
          <span className="text-sm text-[#4B5563]">
            Uploaded: {currFile.name}{" "}
            <X
              size={16}
              className="inline cursor-pointer text-red-800"
              onClick={() => {
                setCurrFile(null);
                onUpload(null);
              }}
            />
          </span>
        )}
      </div>
    </>
  );
};
