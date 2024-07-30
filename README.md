# React + TypeScript + Vite
<!-- logo -->
<p align="center">
  <img width='300' src="/public/pdfai.jpg">
</p>

<!-- tag line -->
<h3 align='center'> Poetry Project: A Django-Based PDF Query System </h3>

<!-- primary badges -->
<p align="center">
  <img src='https://img.shields.io/github/package-json/v/yourusername/yourproject?color=blue&label=npm&style=flat' />
  <img src='https://img.shields.io/bundlephobia/minzip/yourproject?color=success&label=size' />
  <img src='https://img.shields.io/npm/dw/yourproject?color=blueviolet' />
  <a href='https://join.slack.com/your-slack-invite'>
    <img src='https://img.shields.io/badge/Chat-Slack-red'>
  </a>
  <img src='https://img.shields.io/github/stars/yourusername/yourproject?style=social&color=%23FFB31A' />
  <img src='https://img.shields.io/github/followers/yourusername?label=Follow&style=social&color=%23FFB31A' />
  <a href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fyourproject&via=yourtwitterhandle&text=Check%20out%20this%20awesome%20Poetry%20Project%21&hashtags=python,django,llamaindex'>
    <img src='https://img.shields.io/twitter/url/http/shields.io.svg?style=social'/>
  </a>
</p>

<!-- Coverage badges -->
<p align='center'>
  <img src='https://img.shields.io/badge/Stmts-100%25-success' />
  <img src='https://img.shields.io/badge/Branch-100%25-success' />
  <img src='https://img.shields.io/badge/Funcs-100%25-success' />
  <img src='https://img.shields.io/badge/Lines-100%25-success' />
</p>

## Table of Contents
1. [Project Titles and Internal Titles](#project-titles-and-internal-titles)
2. [Introduction](#introduction)
3. [Technologies Used](#technologies-used)
4. [Launch](#launch)
5. [Illustrations](#illustrations)
6. [Scope of Functions](#scope-of-functions)
7. [Use Examples](#use-examples)
8. [Project Status](#project-status)
9. [Sources](#sources)

## Project Titles and Internal Titles
- **Project Name**: Poetry Project
- **Backend Link**: https://github.com/Bettenoch/skimmIt
- **Internal Title**: PDF Query System with Agentic Rags

## Introduction
The Poetry Project is a Django-based web application designed to manage user features such as logins and registrations. This system leverages Llama Index to build a robust document querying system that allows readers to upload PDF files and query them based on their content. The system utilizes an agent reasoning loop to provide both single and multi-document reading capabilities.

## Technologies Used
- **Python**: 3.x
- **Django**: 4.x
- **Poetry**: For dependency management
- **Llama Index**: For document querying
- **Agentic Rags**: For building the agent reasoning loop
- **Dependencies**:
  - `python-dotenv` = "^1.0.1"
  - `ipykernel` = "^6.29.4"
  - `llama-index` = "^0.10.46"
  - `nest-asyncio` = "^1.6.0"
  - `notebook` = "^7.2.1"
  - `attrs` = "^23.2.0"
  - `openai` = "^1.34.0"

## Launch
To launch the Poetry Project, follow these steps:
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/poetry-project.git
    cd poetry-project
    ```
2. Install dependencies using Poetry:
    ```bash
    poetry install
    ```
3. Set up environment variables:
    ```bash
    cp .env.example .env
    ```
4. Run the Django server:
    ```bash
    poetry run python manage.py runserver
    ```

## Illustrations
- **Login Page**: A simple and secure user authentication interface.
- **PDF Upload**: A user-friendly form to upload PDF documents.
- **Query Interface**: An intuitive interface for querying uploaded documents.

## Scope of Functions
- **User Authentication**: Secure login and registration features.
- **PDF Management**: Upload, view, and manage PDF documents.
- **Document Querying**: Use Llama Index to query documents and retrieve relevant information.
- **Agent Reasoning Loop**: Provides capabilities for single and multi-document reading.

## Use Examples
- **Login and Registration**: Users can create an account or log in to access the system.
- **Upload PDF**: Users can upload PDF documents to the system.
- **Query PDF**: Users can input queries to search through their uploaded documents.

## Project Status
The Poetry Project is currently in active development. Future updates will include enhanced querying capabilities, better user interface, and more robust document management features.

## Sources
- [Django Documentation](https://docs.djangoproject.com/)
- [Poetry Documentation](https://python-poetry.org/docs/)
- [Llama Index](https://llamaindex.readthedocs.io/)
- [Agentic Rags](https://agenticrags.io/)


Frontend official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
