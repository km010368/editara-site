
import { useState } from "react";

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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>Editara</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Edição, Tradução e Formatação de Artigos Científicos
      </p>

      <section>
        <h2>Sobre a Editara</h2>
        <p>
          A <strong>Editara</strong> é um serviço especializado em <strong>edição, tradução e formatação de artigos científicos</strong>. Nosso objetivo é ajudar pesquisadores, estudantes e profissionais a comunicarem suas descobertas com clareza, precisão e adequação às exigências das revistas científicas internacionais.
        </p>
        <p>
          Com mais de <strong>20 anos de experiência</strong> em tradução e revisão científica, aliamos <strong>conhecimento técnico</strong> e <strong>excelência linguística</strong> para entregar textos prontos para publicação em periódicos de alto nível.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Serviços</h2>
        <ul>
          <li><strong>Tradução (Português ➡️ Inglês):</strong> Tradução técnica de artigos científicos.</li>
          <li><strong>Revisão de texto (Inglês):</strong> Correção gramatical e fluidez.</li>
          <li><strong>Formatação segundo revistas:</strong> Normas de periódicos específicos.</li>
          <li><strong>Melhoria de clareza:</strong> Legibilidade e impacto científico.</li>
          <li><strong>Formatação de referências:</strong> Estilo exigido (APA, Vancouver etc).</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Envie seu Manuscrito</h2>
        <label>Tipo de serviço:
          <select onChange={(e) => setServiceType(e.target.value)} style={{ marginLeft: '1rem' }}>
            <option value="">Selecione</option>
            <option value="tradução">Tradução</option>
            <option value="revisão">Revisão</option>
            <option value="formatação">Formatação</option>
            <option value="clareza">Melhoria de Clareza</option>
            <option value="referências">Formatação de Referências</option>
          </select>
        </label>
        <br /><br />
        <label>Observações:
          <br />
          <textarea rows="4" cols="50" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>
        <br /><br />
        <input type="file" onChange={handleFileUpload} />
        {submitted && (
          <div style={{ marginTop: '1rem', backgroundColor: '#e0ffe0', padding: '1rem' }}>
            <p><strong>Arquivo recebido:</strong> {fileName}</p>
            <p><strong>Serviço:</strong> {serviceType}</p>
            {notes && <p><strong>Observações:</strong> {notes}</p>}
            <p>Você receberá um orçamento detalhado em até <strong>48 horas úteis</strong>.</p>
          </div>
        )}
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Contato</h2>
        <p>E-mail: <a href="mailto:contato@editara.com.br">contato@editara.com.br</a></p>
      </section>
    </div>
  );
}

export default EditaraWebsite;
