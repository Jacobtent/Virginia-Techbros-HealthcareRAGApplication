Virginia Techbros
Problem Statement & Project Outline
Members: Jacob Tennant, Tia Mehta, Stephen Nguyen, Rafael Viray, Alex Langlie

Challenge 2: AI Medical Research Synthesis Agent
Topic: Healthcare Retrieval Augmented Generation
September 19 - November 14, 2025
Project Outline Link: Lucid Charts Project
Project Spec: Box
Project Miro Board: 

Project Details
Requirements
Multi-document ingestion & analysis
Citation of source material
Prompt engineering of synthesis
Backend integration of document processing
Constraints
Communication between frontend and backend
Learning new/relevant IBM technologies
Output reliability and trustworthiness
Copyrights and data provenance
Data Privacy
Time Management
What do users need?
User Situation
Medical research team is overwhelmed by volume of scientific literature
Need help with document synthesis and citation
Answers to questions need to cite relevant information
Users don’t have time to read through all the documentation, so the tool should do much of it for them
Information should be accurate and cited in a readable way
Interface needs to be easy to use and the flow of information should be clear
Stakeholders and audience

Problem Statement:
	Medical researchers are getting overwhelmed by the volume of scientific literature necessary for their studies. This forces them to spend excessive time searching through documents, manually synthesizing and citing information. They need a tool that saves them time by quickly searching through uploaded documents and retrieving information relevant to requests.

Solution: Create a web application that helps medical researchers summarize, analyze, and synthesize medical research papers. This will be done through a front end interface the user can upload documents and type their request in, and an AI agent to synthesize the uploaded documents and process them with an RAG model to produce relevant output for the user. The output should contain information that is relevant to the user's request and the uploaded documents, while citing which document the information was pulled from.

Evaluation Metrics:
Followed the Solution Requirement (Multi-document ingestion and analysis, Citation of source material, Prompt engineering of synthesis, Backend integration of document processing)
Achieve the Learning Outcomes (Advanced prompt engineering, RAG-based agent design, RAG-based agent design, Vector database integration, Table extraction, structured data synthesis)
Ensure AI output is trustworthy
Make the tool easy and intuitive for researchers

Roles:
Stephen: Data / AI Engineering
Tia: Backend / Flask / Data pipeline
Raf: Backend / Vector Store Construction
Jacob: Frontend / Webapp
Alex: Backend

Used Technologies
watsonx.ai Prompt lab
IBM Granite
Flask or Streamlit
MERN Stack
Mongodb
Express
React
Node.js











Project Manager / Systems Architect


Oversees milestones, ensures requirements are met.


Designs high-level architecture: ingestion → embedding → retrieval → synthesis → citation.


Coordinates across technical + UX teams.


Data Engineer (Ingestion & Processing)


Handles PDF/document ingestion (PyPDF, pdfminer).


Cleans text (remove headers, references, formatting).


Implements chunking strategy for RAG (e.g., 500–1000 tokens).


Sets up an optional vector DB (FAISS, Pinecone, or watsonx.data).


AI/ML Engineer (RAG & Prompt Engineering)


Builds RAG pipeline using watsonx.ai + IBM Granite models.


Tunes prompts for citation style, synthesis quality.


Evaluates model outputs for hallucinations, ensures citations are included.


Backend Developer (Integration)


Creates API layer (Flask/Streamlit app).


Connects ingestion, retrieval, and AI generation pipelines.


Implements query endpoint: input = researcher question, output = synthesized + cited response.


UX/UI Designer (Researcher Interface)


Designs simple, clean interface for researchers.


Search bar + results panel + citations.


Visualizes “source papers used” with expandable context.


Ensures accessibility (non-technical users can use it easily).




