<div align="center">

<img src="assets/images/morf-logo.svg" alt="Morf Editorial" width="320" />

# Monolith CSS
 
*Brutalist CSS framework in one package: themable tokens, atomic utilities and ready-made components.*
 
[![Latest Stable Version](https://img.shields.io/npm/v/monolith-css.svg?label=npm&logo=npm)](https://www.npmjs.com/package/monolith-css)
[![Total Downloads](https://img.shields.io/npm/dt/monolith-css.svg?label=Downloads&logo=npm)](https://www.npmjs.com/package/monolith-css)
[![License](https://img.shields.io/npm/l/monolith-css.svg?label=Licence&logo=open-source-initiative)](https://www.npmjs.com/package/monolith-css)
 
[Install](#install) · [Quick look](#quick-look) · [Naming](#naming) · [Theming](#theming) · [Build](#build) · [Contributing](#contributing)
 
---
 
</div>

- **Themable**: colors are CSS custom properties (`--primary`, `--surface`, `--border`, …). Dark mode follows the OS or `<html data-theme>`. Telegram Mini App theme parameters are picked up automatically.
- **Utilities**: generated from Sass maps (spacing, sizing, flex/grid, colors, borders, typography, shadows) with `sm:` … `2xl:` and `hover:` / `focus:` / `active:` variants.
- **Components**: buttons, cards, stats, badges, forms, lists, header, bottom navigation, modal, chips, progress, log terminal, alerts and settings rows.
- **Compat layer**: the class names of the machinima-core stylesheet keep working (can be switched off).
- **Tiny JS** (optional): modal and theme switcher.

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
@use 'pkg:monolith-css' with (
  $enable-dark-mode: true,
  $enable-compat-machinima: false
);
```

`pkg:` needs `sass --pkg-importer=node` (Sass 1.71+). Override the palette through `$theme` (the whole map, so list every key) and dark overrides through `$theme-dark`.

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

Spacing uses a 4 px unit (`p-4` = 16 px, `-mt-0.5` = −2 px). Shadows are hard offsets that follow `--border`: `shadow-brutal-xs`, `shadow-brutal-sm`, `shadow-btn`, `shadow-brutal`, `shadow-lg`, `shadow-xl`.

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
npm test            # build + verify the machinima-core classes still exist
```

The unpurged CSS is large (all variants). Run it through PurgeCSS in production, or set `$enable-responsive: false` / `$enable-states: false`.

## Contributing

Contributions are welcome and appreciated! Here's how you can contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

This library is licensed under the CSSM Unlimited License v2.0 (CSSM-ULv2). See the [LICENSE](LICENSE) file for details.
