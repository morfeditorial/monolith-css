# Migration

Compat layers are on by default, so existing markup keeps working. New code should use the canonical names below. Turn a layer off once you have migrated:

```scss
@use 'pkg:monolith-css' with (
  $enable-compat-telesender: false,
  $enable-compat-machinima: false,
  $enable-compat-concrete: false
);
```

## machinima-core

All 223 classes of `machinima_core.css` exist unchanged (utilities share the same names and scale). Differences:

- `--primary`, `--surface`, … keep their names. `text-danger` is now `var(--danger)` (`#ff3b30`) instead of `#d32f2f`.
- Telegram theme binding is built in (`$enable-telegram-theme`).
- `app-container` → `app`, `main-content` stays as an alias.

## TeleSender Web

| Old | New |
| --- | --- |
| `site-header`, `site-header-inner` | `header`, `header__inner` |
| `logo-icon`, `logo-mark` | `logo__mark`, `logo__img` |
| `header-status` | `header__status` |
| `grid-2/3/4` | `cols-2/3/4` |
| `stat-card`, `stat-label`, `stat-value(.success)` | `stat`, `stat__label`, `stat__value--success` |
| `card-title` | `card__title` |
| `btn-primary/-success/-danger/-block/-sm`, `btn-row` | `btn--primary/--success/--danger/--block/--sm`, `btn-group` |
| `item-icon/-body/-title/-sub/-actions` | `list-item__icon/__body/__title/__sub/__actions` |
| `badge-success/-warning/-danger/-info/-muted` | `badge--success/…` |
| `empty-text` | `empty__text` |
| `bottom-nav-inner`, `nav-item(.active)`, `nav-item-icon/-emoji/-label` | `bottom-nav__inner`, `bottom-nav__item.is-active`, `bottom-nav__icon/__emoji/__label` |
| `info-label`, `info-value` | `info-row__label`, `info-row__value` |
| `filters`, `filter-chip(.active)`, `.count` | `chips`, `chip.is-active`, `chip__count` |
| `modal.open`, `modal-content(-wide)`, `modal-header/-title/-close` | `modal.is-open`, `modal__dialog(--wide)`, `modal__header/__title/__close` |
| `#task-form`, `#install-form`, … | `modal__form` |
| `field-label`, `field-hint`, `checkbox-row` | `field__label`, `field__hint`, `checkbox` |
| `progress-box/-text/-bar/-bar-fill` | `progress`, `progress__text/__bar/__fill` |
| `task-*`, `plugin-*` rows | `row-card`, `row-card__main/__title/__sub/__text/__meta/__actions` |
| `settings-action*` | `setting`, `setting__info/__title/__desc`, `setting--danger` |
| `logs-toolbar/-status/-filters/-search/-stats/-stat` | `toolbar`, `toolbar__status/__filters/__search`, `stats-bar`, `stats-bar__item` |
| `logs-wrapper`, `logs-container`, `log-line`, `log-time` | `terminal-wrap`, `terminal`, `terminal__line`, `terminal__time` |
| `log-level-ERROR` etc. | `log--error` etc. |
| `logs-scroll-btn` | `fab` |

**Breaking:** `mt-16` / `mb-16` were 16 px in TeleSender; here they follow the 4 px scale (64 px). Use `mt-4` / `mb-4`.

## concrete-css

| Old | New |
| --- | --- |
| `header-inner`, `logo-block`, `logo-text*` | `header__inner`, `logo`, `logo__text`, `logo__title` |
| `nav-list`, `nav-link`, `.nav.open` | `nav__list`, `nav__link`, `.nav.is-open` |
| `hero-inner` | `hero__inner` |
| `form-group`, `form-help`, `label` | `field`, `field__hint`, `field__label` |
| `aside-panel*` | `panel`, `panel__header`, `panel__list` |
| `data-table`, `table-wrapper`, `table-category` | `table`, `table-wrap`, `category-label` |
| `article-detail` | `article--detail` |
| `accordion-item/-trigger/-content/-icon` | `accordion`, `accordion__trigger/__content/__icon` |
| `grid-2-1`, `grid-3-2`, `grid-3-1` | `split--2-1`, `split--3-2`, `split--3-1` |

Behavior changes:

- `btn--success` / `btn--error` are filled; add `btn--outline` for the old outlined look.
- `list-item` is a card with a shadow; use `list--flat` for the old bordered rows.
- Utilities are emitted after components, so they always win.
- The `$prefix` option and the clinic theme were dropped; override `$theme` instead.
- Fixed: the `2xl:` breakpoint class was generated without the `xl` part.
