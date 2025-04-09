
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem } from "@/components/ui/select";

function EditaraWebsite() {
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [notes, setNotes] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setSubmitted(true);
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      <header className="bg-gray-100 p-6 shadow">
        <h1 className="text-3xl font-bold text-center">Editara</h1>
        <p className="text-center text-lg mt-2">Edição, Tradução e Formatação de Artigos Científicos</p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* Sobre */}
        <section id="sobre">
          <h2 className="text-2xl font-semibold mb-4">Sobre a Editara</h2>
          <p>
            A <strong>Editara</strong> é um serviço especializado em <strong>edição, tradução e formatação de artigos científicos</strong>. Nosso objetivo é ajudar pesquisadores, estudantes e profissionais a comunicarem suas descobertas com clareza, precisão e adequação às exigências das revistas científicas internacionais.
          </p>
          <p className="mt-4">
            Com mais de <strong>20 anos de experiência</strong> em tradução e revisão científica, aliamos <strong>conhecimento técnico</strong> e <strong>excelência linguística</strong> para entregar textos prontos para publicação em periódicos de alto nível.
          </p>
        </section>

        {/* Serviços */}
        <section id="servicos">
          <h2 className="text-2xl font-semibold mb-4">Serviços</h2>
          <ul className="space-y-4">
            <li>
              <strong>📝 Tradução (Português ➡️ Inglês):</strong> Tradução técnica de artigos científicos, com precisão terminológica e estilo adequado ao padrão acadêmico.
            </li>
            <li>
              <strong>🔍 Revisão de texto (Inglês):</strong> Correção gramatical, ortográfica e de fluidez, com foco na clareza e coesão científica.
            </li>
            <li>
              <strong>📐 Formatação segundo revistas:</strong> Adequação do manuscrito às normas de periódicos específicos, incluindo estrutura, referências, figuras e tabelas.
            </li>
            <li>
              <strong>🧠 Melhoria de clareza:</strong> Edição voltada à melhoria da legibilidade e impacto científico do texto, mantendo o conteúdo original.
            </li>
            <li>
              <strong>📚 Formatação de referências:</strong> Ajuste completo das citações e lista de referências de acordo com o estilo exigido pela revista (APA, Vancouver, etc).
            </li>
          </ul>
        </section>

        {/* Upload */}
        <section id="orcamento">
          <h2 className="text-2xl font-semibold mb-4">Envie seu Manuscrito</h2>
          <p className="mb-4">Faça o upload do seu arquivo e selecione o serviço desejado para solicitar um orçamento.</p>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Tipo de serviço</label>
            <Select onValueChange={(value) => setServiceType(value)} defaultValue="">
              <SelectItem value="tradução">Tradução</SelectItem>
              <SelectItem value="revisão">Revisão</SelectItem>
              <SelectItem value="formatação">Formatação</SelectItem>
              <SelectItem value="clareza">Melhoria de Clareza</SelectItem>
              <SelectItem value="referências">Formatação de Referências</SelectItem>
            </Select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Observações (opcional)</label>
            <Textarea
              placeholder="Ex: Nome da revista, estilo de citação, instruções específicas..."
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Upload do arquivo</label>
            <Input type="file" accept=".doc,.docx,.pdf,.txt" onChange={handleFileUpload} />
          </div>

          {submitted && (
            <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded">
              <p><strong>Arquivo recebido:</strong> {fileName}</p>
              <p><strong>Serviço:</strong> {serviceType}</p>
              {notes && <p><strong>Observações:</strong> {notes}</p>}
              <p className="mt-2">Você receberá um orçamento detalhado em até <strong>48 horas úteis</strong>.</p>
            </div>
          )}
        </section>

        {/* Contato */}
        <section id="contato">
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p className="mb-2">
            Ficou com dúvidas ou deseja enviar seu artigo para orçamento? Entre em contato conosco:
          </p>
          <p className="mb-4">
            📧 <strong>E-mail:</strong> <a href="mailto:contato@editara.com.br" className="text-blue-600 underline">contato@editara.com.br</a>
          </p>
          <p>
            Ou envie seu manuscrito diretamente pela nossa ferramenta no site. Em até <strong>48 horas úteis</strong>, retornaremos com um orçamento detalhado.
          </p>
          <p className="mt-4">
            Garantimos sigilo absoluto, profissionalismo e compromisso com a qualidade científica.
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-6 mt-12 text-sm text-gray-600">
        © {new Date().getFullYear()} Editara. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default EditaraWebsite;
