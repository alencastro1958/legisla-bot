import json
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

modelo = SentenceTransformer("all-MiniLM-L6-v2")

with open("legislacao.json", "r", encoding="utf-8") as f:
    textos = json.load(f)

corpus = [item["conteudo"] for item in textos]
embeddings = modelo.encode(corpus)

index = faiss.IndexFlatL2(embeddings.shape[1])
index.add(np.array(embeddings))
faiss.write_index(index, "../embeddings/index.faiss")

with open("../embeddings/mapa.json", "w", encoding="utf-8") as f:
    json.dump(textos, f, indent=2)
