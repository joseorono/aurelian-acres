# Aurelian Acres - Project Rules

## Project Overview

Aurelian Acres is a Roman Empire-themed idle/incremental browser game built with React, TypeScript, and Vite. Players earn gold, grain, and stone through clicking and passive income from buildings and workers.

## Tech Stack

- **Framework**: React 18 with TypeScript (strict mode)
- **Build**: Vite 5
- **State**: Jotai (atomic state) + jotai-immer for immutable updates
- **Styling**: Tailwind CSS 3 + DaisyUI (custom "aurelian" theme)
- **Graphics**: Pixi.js 8 + @pixi/react
- **Audio**: @pixi/sound + Howler
- **Routing**: Wouter
- **Validation**: Zod (branded types)
- **Testing**: Vitest + @testing-library/react
- **UI Primitives**: Radix UI (dialog, tooltip), Vaul (drawer)

## Path Aliases

- `~/` maps to `./src/` (e.g., `import { cn } from '~/lib/utils'`)
- `@/` maps to `./public/` (e.g., `import sound from '@/assets/audio/click.mp3'`)

## File & Naming Conventions

- **Component files**: `kebab-case.tsx` (e.g., `big-clicky-button.tsx`)
- **Utility/service files**: `kebab-case.ts` (e.g., `sound-service.ts`)
- **Type files**: `kebab-case.ts` in `src/types/`
- **Component names**: PascalCase (e.g., `BigClickyButton`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `BUILDINGS`, `GAME_TICK_SECONDS`)
- **Variables/functions**: camelCase
- **Test files**: co-located as `*.test.ts` in `src/lib/`

## Directory Structure

```
src/
  components/     # React components organized by feature
    game/         # Main gameplay components (key/, misc/, panes/, shop/)
    modals/       # Modal dialogs (credits, tutorial, congrats, names)
    ui/           # Base UI primitives (dialog, drawer, credenza)
    effects/      # Visual effects
    loader/       # Game loader
  constants/      # Game data definitions (buildings, workers, upgrades, events)
  css/            # Stylesheets (Tailwind base, pixel utils, animations)
  hooks/          # Custom React hooks
  icons/          # Pixel art SVG icon components
  lib/            # Pure business logic and utilities
  services/       # Singleton service classes (sound, assets, loader)
  store/          # Jotai atoms (atoms.ts)
  types/          # TypeScript type definitions
```

## Code Style & Formatting

- **Prettier** handles formatting: 2-space indent, single quotes, trailing commas, 120 char line width, semicolons
- **Tailwind class sorting** is enforced via `prettier-plugin-tailwindcss`
- **ESLint** with React, TypeScript, hooks, and a11y plugins
- Use `cn()` from `~/lib/utils` for conditional class merging (clsx + tailwind-merge)

- Favor composition (render props, children) over inheritance.
- Use refs only for direct DOM access.
- Use guard clauses (early returns) for error handling.
-
## Styling

- You can use Tailwind for simple things but for pixel art and other more complex things use CSS in the /css directory and import it in index.css.

## Component Patterns

- Functional components only, with hooks
- Use `useAtom()` for read/write state, `useAtomValue()` for read-only, unless we're only using locally state.
- All global state lives in Jotai atoms in `~/store/atoms.ts`
- Props are destructured in function parameters
- Use existing UI primitives from `src/components/ui/` (Dialog, Drawer, Credenza) rather than building from scratch, those are shadcn components.
- Component variant styling uses `class-variance-authority` (cva)

## State Management

- Jotai atoms are the single source of truth for game state
- Use `jotai-immer` for complex state mutations
- State persistence uses `atomWithStorage` from jotai/utils
- Keep atoms in `~/store/atoms.ts`; do not scatter atom definitions across components

## Game Data

- Building, worker, and upgrade definitions live in `src/constants/`
- Game data types are defined in `src/types/game-data-types.ts`
- Use discriminated unions and mapped types for type-safe game data
- Branded types via Zod (e.g., `NonEmptyString`) for domain validation

## Services

- Services are singleton classes (e.g., `SoundService`)
- Located in `src/services/`
- Handle cross-cutting concerns like audio, asset loading

## Testing

- Tests live alongside source in `src/lib/*.test.ts`
- Use Vitest for unit tests
- Use `@testing-library/react` for component tests
- Run tests: `npm run test` (UI) or `npm run test-cli` (verbose)

## Build & Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint check
- `npm run prettier-format` - Format code
- `npm run test-cli` - Run tests in CLI

## Important Notes

- The project uses ES modules (`"type": "module"` in package.json)
- TypeScript strict mode is enabled; do not weaken it
- Do not introduce new state management libraries; use Jotai
- Audio must go through the existing SoundService pattern
- The `main` branch is the PR target; development happens on feature branches off `dev-v2`
- Do not handle version control, we'll commit and push our changes ourselves.
