import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  Fade,
} from "@mui/material";
import { motion } from "framer-motion";

export default function ChatLegal() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [loading, setLoading] = useState(false);

  const enviar = async () => {
    setLoading(true);
    const res = await axios.post("http://localhost:5000/perguntar", {
      mensagem: pergunta,
    });
    setResposta(res.data.resposta);
    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        ⚖️ LegislaBot
      </Typography>
      <TextField
        label="Qual sua dúvida legal?"
        variant="outlined"
        multiline
        fullWidth
        minRows={3}
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={enviar}
        disabled={!pergunta.trim() || loading}
      >
        {loading ? "Buscando..." : "Perguntar"}
      </Button>

      {resposta && (
        <Fade in timeout={500}>
          <Paper
            elevation={3}
            sx={{ mt: 4, p: 3, backgroundColor: "#f3f3f3" }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Resposta:
            </Typography>
            <Typography>{resposta}</Typography>
          </Paper>
        </Fade>
      )}
    </Container>
  );
}
