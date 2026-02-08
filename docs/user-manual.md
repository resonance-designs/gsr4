---
title: User Manual
sidebar_position: 3
---

# User Manual

This manual covers the current TLBX-1 workflow.

## Transport

- **Play/Stop**: The global transport button in the header starts or stops all tracks simultaneously.
- **Audition**: Located within the engine controls, this momentary button plays only the currently selected track while held down, allowing for quick checks without starting the entire project.
- **Keyboard (standalone)**: Space toggles Play/Stop. Escape closes open modals.

## Visualizers

- Use the visualizer toggles to switch between oscilloscope, spectrum, and vectorscope.

## Tracks

- Use the Track 1–4 buttons to select the active track.
- Each track can load a primary **Engine** and run a chain of **Downstream Devices**.

## Engines

TLBX-1 features several specialized engines that serve as the primary sound sources:

- **[Tape-Deck Engine](./tape-deck-engine.md)**: A sample-based tape-deck simulator with looping and recording.
- **[Animate Engine](./animate-engine.md)**: A 4-slot vector synthesizer with wavetables and samples.
- **[FMMI Engine](./fmmi-engine.md)**: A two-operator FM synth with sequencer and per-step parameter locks.
- **[SynDRM Engine](./syndrm-engine.md)**: A multi-channel drum synth and sequencer.
- **[Void Seed Engine](./void-seed-engine.md)**: A generative drone and texture synthesizer.

## Downstream Devices

Each track features a chain of downstream devices for further processing:

- **[Granulator](./granulator.md)**: Rhythmic and atmospheric granular processing.
- **[Silk](./silk-device.md)**: Resonator, filter bank, and harmonic shaper.
- **[Modul8](./modul8-device.md)**: 8‑LFO modulation device for engine + downstream parameters, with per‑LFO Amount and Bias (center) controls.
- **[G8 (Trance Gate)](./g8-device.md)**: 64-step rhythmic volume gating.
- **[Texture](./texture-device.md)**: Saturation, compression, and lo-fi degradation.
- **[Reflect](./reflect-device.md)**: High-quality delay and algorithmic reverb.

## Audio Settings (Standalone)

- Open Settings to choose output/input device, sample rate, and buffer size.
- Settings open in a modal window and can be closed with Escape.

## Project Management

- Save Project / Load Project stores per-track sample paths and loop/mix state.
- Project files use the `.tlbx` extension (JSON-based).
- Use the Browser panel to browse project files and sample libraries.
- Add Library Folder registers a folder in the browser list.

## Browser

- Open the Browser to view saved projects and library folders.
- Selecting a folder updates the entry list for quick loading.

## Documentation

- Use the Docs button to open the local documentation site (installed with the app).
- UI controls are based on the [Resonance Designs Slint UI Component Kit](https://github.com/resonance-designs/rds-slint-ui-kit).
