# Monolith CSS

Brutalist CSS framework in one package: **themable tokens**, **atomic utilities** and **ready-made components**.
It merges [concrete-css](https://github.com/medcore-ua/concrete-css), the machinima-core stylesheet and the TeleSender Web stylesheet into a single system.

- **Themable** – colors are CSS custom properties (`--primary`, `--surface`, `--border`, …). Dark mode follows the OS or `<html data-theme>`. Telegram Mini App theme parameters are picked up automatically.
- **Utilities** – generated from Sass maps: spacing, sizing, flex/grid, colors, borders, typography, shadows, plus `sm:` … `2xl:` and `hover:`/`focus:`/`active:` variants.
- **Components** – buttons, cards, stats, badges, forms, lists, header, top/bottom navigation, modal, chips, progress, log terminal, table, accordion, alerts, hero, footer and more.
- **Compat layers** – the old class names of all three sources keep working (each layer can be switched off).
- **Tiny JS** – modal, accordion, nav toggle and theme switcher (optional, ~5 KB).

## Install

```bash
npm install monolith-css
```

```html
<link rel="stylesheet" href="node_modules/monolith-css/dist/monolith.css">
<script src="node_modules/monolith-css/dist/monolith.js"></script>
```

Or from Sass:

```scss
@use 'monolith-css' with (
  $enable-dark-mode: true,
  $enable-compat-telesender: false,
  $theme: (
    'primary': #0a0a0a,
    'accent': #ff3b30,
    'surface': #ffffff,
    'background': #f4f4f0,
    'border': #0a0a0a,
    'text': #0a0a0a,
    'muted': #6b6b6b,
    'primary-2': #2b2b2b,
    'primary-soft': #ececec,
    'on-primary': #ffffff,
    'surface-2': #f0f0ec,
    'success': #12b981,
    'warning': #f59e0b,
    'danger': #ff3b30,
    'info': #3b82f6
  )
);
```

## Quick look

```html
<div class="card">
  <h2 class="card__title">Create task</h2>
  <div class="field">
    <label class="field__label">Chat</label>
    <input class="input" placeholder="@username">
  </div>
  <div class="btn-group">
    <button class="btn btn--primary">Save</button>
    <button class="btn">Cancel</button>
  </div>
</div>

<div class="flex items-center justify-between gap-4 p-4 border-2 shadow-brutal md:p-6">…</div>
```

Open [`examples/index.html`](examples/index.html) after `npm run build` for a full showcase.

## Naming

| Kind | Convention | Example |
| --- | --- | --- |
| Component | `block`, `block__element`, `block--modifier` | `modal__dialog`, `btn--primary` |
| State | `is-*` | `chip is-active`, `modal is-open` |
| Utility | short atomic names | `px-4`, `bg-surface`, `text-muted` |
| Variant | `variant:utility` | `md:flex`, `hover:bg-primary`, `active:translate-brutal` |

Spacing uses a 4 px unit (`p-4` = 16 px, `-mt-0.5` = −2 px). Shadows are hard offsets that follow `--border`: `shadow-brutal-xs/sm/btn/brutal/lg/xl`.

## Theming

```html
<html data-theme="dark">   <!-- force dark -->
<html data-theme="light">  <!-- force light -->
<html>                     <!-- follow the OS -->
```

Inside Telegram Mini Apps `--primary`, `--surface`, `--background`, `--text`, `--muted` and `--border` are bound to `--tg-theme-*` with the palette as a fallback. Disable with `$enable-telegram-theme: false`.

## Build

```bash
npm run build       # dist/monolith.css + dist/monolith.js
npm run build:min   # minified
npm test            # build + verify legacy classes still exist
```

The unpurged CSS is large (all variants); run it through PurgeCSS / Lightning CSS in production, or set `$enable-responsive: false` / `$enable-states: false`.

## Migrating

See [docs/MIGRATION.md](docs/MIGRATION.md) for the class mapping from concrete-css, machinima-core and TeleSender Web.

## License

CSSM Unlimited License v2.0 (CSSM-ULv2). See [LICENSE](LICENSE).
