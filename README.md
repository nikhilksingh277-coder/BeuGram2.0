# BeUgram

BeUgram is the BeUgram college social-network demo migrated to a React + Vite runtime while preserving the original application behavior and visual design.

## Run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The original `beugram_state_v1` and `beugram_registered_users_v1` localStorage keys are preserved by the application runtime.

## Notes

The original application logic is intentionally kept intact under `src/legacy/legacy.js` because it is a large, working DOM application with an established data/state model. React owns the Vite entry point and mounts the compatibility shell before the legacy application initializes. This minimizes regression risk for the hackathon build.
