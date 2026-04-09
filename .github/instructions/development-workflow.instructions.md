---
applyTo: "{shared,shell,chat,directory,activities,artifact,calendar,consents,crm,notification,office,qnreditor,storage,devextreme}/**/*.{ts,tsx}"
---

# ASMA Development Workflow

Apply these rules when doing product development in domain apps and shared libraries.

## Primary Interface

- Use `asma {cmd-group}` commands first.
- Prefer: `asma git ...`, `asma app ...`, `asma workspace ...`.
- Use direct `git`, `pnpm`, or other commands only if no ASMA command exists.

## Context-First Syntax

For context-aware flows:

- `asma git <context> <command> ...`
- `asma app <context> <command> ...`

Examples:

- ✅ `asma git chat status`
- ✅ `asma git chat branch create --from ASMA-1234`
- ❌ `asma git status chat`

## Day-to-Day Stack

- React + TypeScript (micro apps)
- Node.js services
- Bun.js services (incremental adoption)
- Hasura metadata/workflow

## Branching and Commit Flow

- Create feature branches from Jira via ASMA commands.
- Prefer `--from` flow with autocomplete and Jira-driven naming.
- When needed, use dependent-aware operations so target + dependents stay aligned.
- Keep safety defaults and guardrails active.

## Code Generation Guidelines

When generating app/domain code:

1. Prefer TypeScript-first implementation.
2. All new code and tests must be TypeScript (`.ts`/`.tsx`).
3. Do not add new JavaScript files unless explicitly requested.
4. Follow existing React/Vite patterns in the target module before introducing new abstractions.
5. Keep changes scoped to the active domain/context; avoid broad cross-repo edits unless requested.
6. Preserve existing public contracts (API/schema/component props) unless migration is explicit.

When generating Node/Bun backend code:

1. Match runtime already used by the target repo; do not switch runtime implicitly.
2. Keep startup/build scripts consistent with existing package scripts.
3. Add clear runtime-safe error handling and minimal logging.

When generating Hasura-related changes:

1. Keep metadata changes minimal and consistent with current folder conventions.
2. Avoid speculative schema changes outside requested scope.
3. Prefer additive, reversible modifications where possible.

## Missing Workflow Rule

If a workflow is missing or not intuitive:

1. Inform explicitly what is missing.
2. Propose a new ASMA command or flag.
3. Prioritize: safety → DX clarity → automation.
4. Provide a minimal syntax example.
