# Content Editing Guide

This folder is where you manage site content without editing layout code.

## Tutorial

- Location: `content/tutorial/lessons/`
- One file per lesson (Markdown)
- Example: `01-introduction.md`

Each lesson supports frontmatter:

```md
---
title: "Lesson title"
description: "One-line summary shown on the lesson list page."
order: 1
---
```

Then write your lesson body in Markdown.

If you add new lesson files, include their slug in:

- `content/tutorial/index.ts`

The slug is the filename without `.md`.

## Glossary

- Location: `content/glossary.ts`
- Add entries in the `glossaryEntries` array.

```ts
{ term: "Your term", definition: "Your definition" }
```
