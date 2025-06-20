from flask import Flask, request, jsonify
from sentence_transformers import SentenceTransformer
import faiss, json, numpy as np

app = Flask(__name__)
modelo = SentenceTransformer("all-MiniLM-L6-v2")

index = faiss.read_index("../embeddings/index.faiss")
with open("../embeddings/mapa.json", "r", encoding="utf-8") as f:
    textos = json.load(f)

@app.route("/perguntar", methods=["POST"])
def perguntar():
    dados = request.get_json()
    pergunta = dados["mensagem"]
    emb = modelo.encode([pergunta])
    _, ids = index.search(np.array(emb), k=1)
    resultado = textos[ids[0][0]]
    return jsonify({"resposta": resultado["conteudo"]})

if __name__ == "__main__":
    app.run(debug=True)
