---
title: Developer Docs
sidebar_position: 1
---

# Developer Documentation

This section is the home for Markdown-based developer docs. Add new files under `docs/` and they will appear in the Docusaurus site automatically.

TLBX-1 is built using Rust and the Slint UI framework.

## UI Architecture

The project-specific UI is divided into several specialized engine and device components:

- **Engines**: Located in `src/ui/engines/` (`tape_engine.slint`, `animate_engine.slint`, `syndrm_engine.slint`, `void_seed_engine.slint`).
- **Devices**: Located in `src/ui/devices/` (`granulator_device.slint`, `silk_device.slint`, `g8_device.slint`, `texture_device.slint`, `reflect_device.slint`).

## RDS UI Component Kit

TLBX-1 utilizes the **[Resonance Designs Slint UI Component Kit](https://github.com/resonance-designs/rds-slint-ui-kit)** for its reusable UI building blocks. Everything located in `src/ui/components/` is part of this toolkit, including:

- **Shared Controls**: Knobs, buttons, selectors, and sliders.
- **Visualizers**: Core visualization and metering components (`src/ui/components/viz.slint`).
- **Theming**: Shared color palettes and layout constants.

For documentation regarding these reusable components, please refer to the official RDS documentation.

The user documentation has been expanded to include detailed guides for each engine and device. See the **[User Manual](./user-manual.md)** for an overview and links to specific component documentation.

## Build the Docs Site

From the repo root:

```bash
npm run docs:install
npm run docs:dev
```

## Packaging

Run the cross-platform packaging pipeline (OS-specific output):

```bash
npm run tlbx:build
```

## Version Sync

```bash
npm run version:sync
```

## Local Docs Deployment

```bash
npm run tlbx:dev-docs
```
