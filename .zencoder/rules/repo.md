---
description: Repository Information Overview
alwaysApply: true
---

# GrainRust Information

## Summary
GrainRust is a 4-track granular sampler built in Rust, inspired by the Torso S-4 workflow. It operates as both a standalone application and a VST3/CLAP plugin (via `nih-plug`). The project features a custom UI built with Slint and a robust DSP engine using `fundsp`.

## Structure
- **src/**: Main Rust codebase and Slint UI definitions.
  - **ui/**: Slint UI components and layouts.
  - **library/**: Audio factory and user library management.
- **docs-site/**: Documentation portal built with Docusaurus and Storybook.
- **scripts/**: Development, packaging, and deployment scripts.
- **docs/**: Technical and onboarding documentation.
- **ref/**: Reference materials.

## Language & Runtime
**Language**: Rust (Edition 2024)  
**UI Framework**: Slint (1.14.1)  
**Audio Framework**: nih-plug, fundsp, cpal  
**Build System**: Cargo (Rust), npm (tooling/docs)

## Dependencies
**Main Dependencies**:
- `nih_plug`: Plugin framework and standalone host.
- `slint`: UI framework.
- `fundsp`: Audio DSP library.
- `symphonia`: Audio decoding.
- `cpal`: Audio I/O.
- `baseview`: Windowing for plugins.

**Development Dependencies (JS)**:
- `docusaurus`: Documentation site.
- `storybook`: UI component gallery.

## Build & Installation
```bash
# Run standalone application
cargo run

# Run with development scripts
npm run grainrust:dev

# Build docs
npm run docs:build
```

## Main Files & Resources
- **src/main.rs**: Standalone entry point.
- **src/lib.rs**: Plugin entry point and core logic.
- **src/ui/grainrust.slint**: Main UI layout.
- **src/ui/testing_grounds.slint**: UI component testing environment.
- **Cargo.toml**: Rust dependencies and features.
- **package.json**: Development scripts and orchestration.

## Testing
**Framework**: Custom UI Testing Grounds, Slint integration.
**Test Location**: `src/ui/testing_grounds.slint`, `src/lib.rs`.
**Features**:
- `ui-testing`: Enables the component gallery mode.
- `--test-ui`: CLI flag for Figma UI testing.

**Run Command**:
```bash
# Run UI Testing Grounds (requires main.rs update or specific feature flag)
cargo run --features ui-testing

# Run Figma UI Test
cargo run -- --test-ui
```
