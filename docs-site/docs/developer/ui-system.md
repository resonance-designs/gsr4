---
title: UI System
sidebar_position: 4
---

# UI System

The TLBX-1 UI is built using **Slint**, a modern declarative UI framework. It is designed to be responsive, hardware-accelerated, and deeply integrated with the Rust DSP engine.

## Resonance Designs Slint UI Component Kit
TLBX-1 utilizes the **Resonance Designs Slint UI Component Kit** for its core interface elements. This kit provides standardized, high-performance components specifically designed for audio applications.

- **Standardized Components**: Knobs, sliders, buttons, and visualizers follow a consistent design language.
- **Documentation**: For specific details on these components, please refer to the official [Resonance Designs Documentation](https://resonance-designs.com/docs/ui-kit).
- **Integration**: The kit is imported into the project's `.slint` files, allowing for a "Low Code" approach to building complex control surfaces.

## UI Architecture

### 1. Declarative Layouts
The UI is defined in `.slint` files located in `src/ui/`.
- `tlbx1.slint`: The main entry point for the UI layout.
- `engines/` and `devices/`: Sub-components for specific sound sources and effects.

### 2. The Rust-Slint Bridge
The connection between the Slint UI and the Rust audio engine happens in `src/lib.rs`.
- **Properties**: Slint properties (like slider values) are linked to Rust variables.
- **Callbacks**: UI events (like clicking "Play") trigger Rust functions via `ui.on_...` closures.
- **Polling**: The UI thread periodically polls the audio engine for metering data and updates Slint properties to drive visualizers.

## Windowing and Rendering
TLBX-1 uses a custom windowing implementation to support both standalone and plugin modes:
- **Standalone**: Uses `winit` for window management.
- **Plugin**: Uses `baseview` to create a child window inside the DAW's process.
- **Rendering Backend**: Leverages `softbuffer` for cross-platform, CPU-based rendering that remains performant without requiring complex GPU drivers.

## Developer Workflow
To modify the UI:
1. Edit the relevant `.slint` files.
2. If adding new parameters, ensure they are registered in the `nih-plug` `Params` struct in `src/lib.rs`.
3. Use `cargo run` to preview changes in standalone mode.
4. For rapid component testing, use the `testing_grounds.slint` environment.
