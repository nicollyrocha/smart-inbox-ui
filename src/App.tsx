import { useState } from "react";
import { Card } from "./components/Card";
import { TextArea } from "./components/TextArea";
import { Button } from "./components/Button";
import { UploadButton } from "./components/UploadButton";
import { Loader2 } from "lucide-react";

function App() {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    category: string;
    reply: string;
  }>(null);

  const onSubmit = async () => {
    if (!text.trim() && !file) {
      alert("Digite um email ou envie um arquivo.");
      return;
    }

    const formData = new FormData();

    if (file) {
      formData.append("file", file);
    } else {
      formData.append("text", text);
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "https://smart-inbox-backend.onrender.com/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setResult(data);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert("Erro ao processar email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="bg-[#2563EB] w-full flex justify-center text-white py-4 text-xl">
        Smart Inbox
      </div>
      <div className="text-[#1F2937] font-semibold text-center text-md">
        Classifique emails e gere respostas.
      </div>
      <div className="flex flex-col gap-10 px-5 mb-10 md:px-0">
        <Card className="border-[#2563EB] shadow-md bg-[#DBEAFE] ">
          <div>Cole o email ou faça upload (.txt ou .pdf)</div>
          <TextArea value={text} onChange={setText} file={file} />
          <UploadButton onUpload={(file) => setFile(file)} text={text} />
          <Button
            label={
              loading ? (
                <Loader2 className="animate-spin flex justify-self-center" />
              ) : (
                "Classificar Email"
              )
            }
            onClick={onSubmit}
            disabled={loading || (!text.trim() && !file)}
          />
        </Card>
        {result && (
          <Card
            className={`${
              result?.category === "produtivo"
                ? "border-[#16A34A] bg-[#DCFCE7]"
                : "border-[#F59E0B] bg-[#FEE2E2]"
            }`}
          >
            {result && (
              <>
                <div>
                  <strong>Categoria:</strong> {result.category.toUpperCase()}
                </div>
                <div>
                  <strong>Resposta:</strong> {result.reply}
                </div>
              </>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
