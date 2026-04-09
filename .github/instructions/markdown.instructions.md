---
applyTo: "**/*.md"
---

# Markdown Instructions

Apply these rules when editing Markdown files.

## Documentation Style

- Split large docs into focused 1–2 page documents.
- Use cross-linking between docs.
- Keep `README` as index/navigation.
- Write documentation files under `_docs/` by default.
- Only place documentation outside `_docs/` when explicitly requested.

## Bitbucket Markdown Rendering (Critical)

Bitbucket requires blank lines before lists and code blocks.

Required formatting rules:

1. Always add a blank line before lists (bullet or numbered).
2. Always add a blank line before code blocks (` ``` `).
3. Maintain blank lines between sections.

Wrong:

`**Text:**\n- Item`

Correct:

`**Text:**\n\n- Item`

When editing `.md` files, ensure blank lines exist before every list and code block.
