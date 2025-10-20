# IBM Challenge 2 — AI Medical Research Synthesis Agent

**Persona:** Medical researchers overwhelmed by literature, need fast, cited answers.  
**Challenge:** Use AI agents to synthesize insights from multiple papers and answer questions **with citations**.  
**Context:** Ingest PDFs → RAG retrieves passages → model generates grounded answers.

## Components
- **Frontend (React):** Upload, ask, view answer + [n] chips, page preview.
- **Backend (Flask):** `/ingest`, `/query`, `/doc/{id}/page/{p}`; parsing, retrieval, synthesis.
- **IBM Services:** watsonx.ai (Granite + Embeddings), watsonx.data (vector store), IBM COS.
