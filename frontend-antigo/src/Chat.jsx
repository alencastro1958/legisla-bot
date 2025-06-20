import { useState } from "react";
import axios from "axios";

export default function ChatLegal() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");

  const enviar = async () => {
    const res = await axios.post("http://localhost:5000/perguntar", { mensagem: pergunta });
    setResposta(res.data.resposta);
  };

  return (
    <div>
      <textarea value={pergunta} onChange={e => setPergunta(e.target.value)} />
      <button onClick={enviar}>Perguntar</button>
      <p><strong>Resposta:</strong> {resposta}</p>
    </div>
  );
}
