Here's a simple Git commit guide in the same style:

```
feat(scope): short summary in imperative mood

- describe the first significant change
- describe the second significant change
- describe the third significant change
- describe any dependency or infrastructure updates
```

### Example

```text
feat(ui): add design tokens, Inter font, and global styles

- replace Geist with self-hosted Inter via next/font/google
- define Tailwind v4 @theme inline color tokens for dark and light modes
- add CSS keyframes for marquee and pulse-dot animations
- install core UI, validation, email, i18n, and utility dependencies
```

### Guidelines

* **Title**

  * Format: `type(scope): summary`
  * Use the imperative mood (`add`, `fix`, `refactor`, `remove`).
  * Keep it concise (around 50–72 characters).

* **Body**

  * Leave one blank line after the title.
  * Use bullet points to summarize the main changes.
  * Focus on **what changed**, not implementation details.
  * Group related changes together.
  * Mention new dependencies or major configuration changes.

### Common Types

* `feat` — New feature
* `fix` — Bug fix
* `refactor` — Code restructuring without behavior changes
* `perf` — Performance improvements
* `style` — Formatting or styling only
* `docs` — Documentation
* `test` — Tests
* `build` — Build system or dependencies
* `ci` — CI/CD changes
* `chore` — Maintenance tasks
* `revert` — Revert a previous commit

### Tips

* One commit should represent one logical change.
* Keep the title readable on its own.
* Use the body to explain the major additions or changes at a high level.
* If the commit becomes too long or covers unrelated work, split it into multiple commits.
