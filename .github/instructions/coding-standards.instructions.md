---
applyTo: "**/*.{ts,tsx,js,jsx,py,sql,yml,yaml}"
---

# Shared Coding Standards

Apply these standards across all coding tasks unless a scoped instruction file provides stricter rules.

## Priority Order

1. Task/user request
2. Scoped instruction file (CLI, domain workflow, infrastructure)
3. This shared coding standards file

## Workspace File Location Policy

- Workspace definition files (`*.code-workspace`) must live only under `root/workspaces/*`.
- Do not create or modify workspace files outside `workspaces/`.

## Type Safety Policy (STRICT)

- Never use `# type: ignore`.
- Only allowed exception: `# type: ignore[import-untyped]` for external untyped packages.
- Do not silence errors by default; resolve root cause.
- All new code and tests must be TypeScript (`.ts`/`.tsx`).
- Do not create new JavaScript files (`.js`/`.jsx`) unless explicitly requested.

Use these patterns instead:

- Cast based on inspected structure: `cast(Optional[list[str]], data.get("key"))`
- Guard before use: `if value is not None and isinstance(value, list):`
- Document expected structure in docstrings.
- Validate input with explicit, actionable error messages.

## Structure and Size Targets

- File size target: 200–400 lines, hard limit 600.
- Function size target: 10–50 lines, hard limit 100.
- Split files/functions when responsibilities diverge.
- Organize by feature/capability, not generic buckets.

## Design Guidelines

- Prefer small composable functions for transformations.
- Use classes only for state, lifecycle, orchestration, or caches.
- Avoid classes that only wrap static helpers.
- One clear responsibility per file/function/class.

## Naming Guidelines

- Functions: verb + noun (`create_server_group`, `validate_pattern`).
- Classes: clear nouns (`DatabaseInspector`, `PipelineGenerator`).
- Variables: descriptive nouns (`excluded_databases`, not `exc`).
- Constants: `UPPER_CASE_WITH_UNDERSCORES`.
- Files: specific names matching responsibility; avoid `utils.py`, `common.py`, `misc.py`.

## Type Hints and Documentation

- Require type hints on all new/changed public functions and methods.
- Prefer precise types (`TypedDict`, `Literal`, explicit containers) for domain structures.
- Public functions require docstrings: one-line summary, args, returns, short example where useful.

## Error Handling and Validation

- Validate inputs early with clear failures.
- Use specific exceptions (`ValueError`, `TypeError`, etc.).
- Keep user-facing errors concise and actionable.
- Log detailed diagnostics only where appropriate.

## Security and Data Safety

- Never hardcode credentials, tokens, or secrets.
- Use environment variables or secret managers.
- Prevent injection risks with validation/parameterization.
- Avoid unsafe dynamic execution and unvalidated path operations.

## Performance and Reliability

- Avoid redundant expensive operations (duplicate I/O, connections, parsing).
- Prefer context managers for resources.
- Keep behavior deterministic and reproducible.
- Prioritize clarity first; optimize when there is evidence of bottlenecks.

## Mandatory Post-Generation Quality Gate

After any code generation or modification, run and resolve all relevant quality checks before considering the task done.

Required checks (run what exists in the target project):

1. Tests (unit/integration where available)
2. Type checks
   - Python: Pylance/Pyright/mypy (as configured)
   - TypeScript: `tsc` and project type checks
3. Lint/warnings
   - Python: `ruff` (and other configured linters)
   - JS/TS: `eslint` (and other configured linters)

Rules:

- Fix all new and existing errors/warnings in scope of the task.
- Do not ignore failing checks or silence warnings without a strong, explicit reason.
- If tests do not exist for changed behavior, emit a warning and add appropriate tests.
- If no test framework exists, emit a warning that tests are missing and note risk.
- Do not declare completion until checks pass, or clearly report blockers with exact failing output.
- For CLI/command changes, always add or update both unit tests and E2E-style tests in the same change.

Execution behavior for tooling:

- Avoid repeated environment setup/configuration loops.
- If environment setup is canceled/unavailable, continue with available checks and report the missing step as a blocker.

## Review Checklist (AI Quick Pass)

Before finishing a change:

- [ ] File/function sizes within limits.
- [ ] Type hints present and accurate.
- [ ] No forbidden `# type: ignore` usage.
- [ ] Naming is explicit and domain-specific.
- [ ] Validation and errors are clear.
- [ ] No credentials/secrets in code.
- [ ] Changes scoped to request.
- [ ] Tests run; missing tests added or flagged.
- [ ] Type checks pass.
- [ ] Lint checks pass.
