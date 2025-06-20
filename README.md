<h1 align="center">🤖 LegislaBot</h1>

<p align="center">
  Agente inteligente que responde dúvidas sobre a <strong>Legislação da Aprendizagem no Brasil</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Busca%20Sem%C3%A2ntica-FAISS-blue" />
  <img src="https://img.shields.io/badge/LLM-ready-green" />
  <img src="https://img.shields.io/badge/Frontend-React-informational" />
  <img src="https://img.shields.io/badge/Backend-Flask-red" />
</p>

---

## 📚 Visão geral

O **LegislaBot** é um agente que responde perguntas com base em artigos da CLT, decretos e leis sobre Aprendizagem Profissional. Utiliza busca semântica com **FAISS + SentenceTransformers**, roda localmente sem custo, e pode ser facilmente integrado a modelos de linguagem como GPT ou Gemini no futuro.

---

## 🧠 Tecnologias

- Python + Flask (backend)
- FAISS + embeddings (busca vetorial local)
- SentenceTransformers (`all-MiniLM-L6-v2`)
- React (frontend)
- JSON como base legal

---

## 🚀 Como executar

### Backend

```bash
cd backend
pip install -r requirements.txt
python vetoriza.py   # Gera os embeddings da base legal
python app.py        # Inicia API em http://localhost:5000
```
