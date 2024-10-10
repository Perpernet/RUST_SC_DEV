# Explore Solana Rust Smart Contract Developer Tool Quickstart

## Quickstart Setup

### 1. Clone repo - Vercel AI SDK Quickstart Used

```shell
git clone https://github.com/Perpernet/RUST_SC_DEV
```

### 2. Set your [OpenAI API key](https://platform.openai.com/api-keys)

```shell
export OPENAI_API_KEY="sk_..."
```

(or in `.env.example` and rename it to `.env`).

### 3. Install dependencies

```shell
npm install
```

### 4. Run

```shell
npm run dev
```

### 5. Navigate to [http://localhost:3000](http://localhost:3000).

## Deployment

You can deploy this project to Vercel or any other platform that supports Next.js.


## Overview

RUST_SC_DEV is an AI-powered assistant designed to streamline Solana smart contract development using Rust. It provides code generation, debugging support, and best practices guidance for writing and deploying Solana programs. The project aims to simplify the development workflow by offering an integrated environment where users can build, test, and deploy Solana programs using AI-driven tools.
In addition to core development support, RUST_SC_DEV will feature simple interface builders for interacting with Solana programs. These builders will allow developers to create user interfaces (UIs) that communicate with Solana-based applications, making it easier to integrate Rust programs into larger blockchain projects.

Future Integration
We plan to integrate a Retrieval-Augmented Generation (RAG) system using the [RAGBuilder library](https://github.com/KruxAI/ragbuilder?tab=readme-ov-file) to enhance the assistant's capabilities. This will allow the AI agent to use up-to-date Solana documentation and other external resources dynamically, improving the quality and context of its code suggestions.



### Main Components

- `app/components/chat.tsx` - handles chat rendering, [streaming](https://platform.openai.com/docs/assistants/overview?context=with-streaming)
- `app/components/file-viewer.tsx` - handles uploading, fetching, and deleting files for [file search](https://platform.openai.com/docs/assistants/tools/file-search)

### Endpoints

- `api/assistants` - `POST`: create assistant (only used at startup)
- `api/assistants/threads` - `POST`: create new thread
- `api/assistants/threads/[threadId]/messages` - `POST`: send message to assistant
- `api/assistants/threads/[threadId]/actions` - `POST`: inform assistant of the result of a function it decided to call
- `api/assistants/files` - `GET`/`POST`/`DELETE`: fetch, upload, and delete assistant files for file search

## Feedback

Let us know if you have any thoughts, questions, or feedback at perpernetwork@gmail.com
Use 60seconds delay if publish code on Vercel
