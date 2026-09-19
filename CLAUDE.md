# Choreography Mapper

Planning documents live outside this repo, in the EricAssistant workspace:

- Spec: ../../EricAssistant/projects/choreography-mapper/spec.md
- Plan: ../../EricAssistant/projects/choreography-mapper/plan.md
- Build process: ../../EricAssistant/references/sops/build-process.md

@../../EricAssistant/context/me.md

Rules for this repo:

- Build one slice at a time with Eric, following the build process above.
  Eric types the code and runs the commands; the assistant explains, reads
  back, and reviews.
- src/domain/ is pure TypeScript: no React, no DOM, no storage imports.
- No real song lyrics in tests or sample data.
- No em dashes, no emojis, including comments and commit messages.
