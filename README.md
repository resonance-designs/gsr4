# TLBX-1

![Static Badge](https://img.shields.io/badge/Version-0.1.24-orange)

TLBX-1 is a 4-track audio toolbox built in Rust. It features different audio engines, one of which is inspired by the Torso S-4 workflow. It runs as a standalone app and as a plugin via nih-plug, with a Slint-based UI.
The UI is built with Slint in combination with the [Resonance Designs Slint UI Component Kit](https://github.com/resonance-designs/rds-slint-ui-kit).

## Features

- 4 stereo tracks with per-track playback
- Global transport (play/stop all tracks)
- Per-track level, mute, and loop controls (start/length/x-fade)
- Engine loader per track
- Engine 1: Tape-Deck (based on Torso S-4)
- Engine 2: Animate (based on Korg Wavestation)
- Engine 3: SynDRM (multi-channel drum synth + sampler with step sequencing)
- Engine 4: Void Seed (generative drone engine)
- Engine 5: FMMI (two-operator FM synth with sequencer + per-step parameter locks)
- Void Seed Moog filter + drive with pre/post toggle, Close Decay, and stereo width control
- RDS Slint UI Component Kit for shared UI controls and theming
- Post-tape granular buffer with bypass toggle (Granulator device)
- Post-tape filter with bypass toggle (Silk device)
- Post-tape Modul8 device with 8 LFOs and engine-scoped targets
- Post-tape trance gate with bypass toggle (G8 device)
- Post-tape Texture device with drive/compress/crush/tilt/noise + gate
- Post-tape Reflect device with delay + reverb, time divisions, and clear/freeze
- Experimental: Tape engine can load video files and display playback in place of the waveform (audio still drives playback).
- Project save/load (`.tlbx` JSON format)
- Project/library browser for samples and saved projects
- Standalone audio device settings (device, sample rate, buffer size)
- Built-in visualizers (oscilloscope, spectrum, vectorscope)

## Build

### Standalone

``` bash
npm run tlbx:dev
```

To run with backtraces enabled:

```bash
npm run tlbx:dev-bt
```

### Plugin

Build a plugin binary using nih-plug (VST3/CLAP/etc.) depending on your local setup. See nih-plug documentation for details.

## Logging

Set `RUST_LOG` to control log verbosity (for example, to suppress decoder debug logs):

```bash
RUST_LOG=symphonia_core=warn
```

```powershell
$env:RUST_LOG="symphonia_core=warn"
```

## Documentation

- Developer onboarding: `docs/DEVELOPER_ONBOARDING.md`
- Developer docs live in `docs/` and are published with Docusaurus
- Local documentation is served from `documentation/index.html`

### Docs (Docusaurus)

```bash
npm run docs:install
npm run docs:dev
```

### Local Docs Deployment

```bash
npm run tlbx:dev-docs
```

## Packaging

This project builds a standalone app and a VST3 plugin. Installers are OS-specific:

- Windows: NSIS installer with optional VST3 component
- macOS: pkgbuild/productbuild with optional VST3 component
- Linux: staged artifacts (no installer)

### Build installers/packages

```bash
npm run tlbx:build
```

### VST3 input path

Set `TLBX_VST3_PATH` to the built VST3 bundle before running `tlbx:build` on all platforms. On macOS also set `TLBX_APP_PATH` to the `.app` bundle.

Installers include the built documentation site under `documentation/` in the install location.

## Controls (Current UI)

- Track selection buttons choose the active track for editing
- Engine selector + Load Engine loads the selected engine for the active track
- Loading an engine on an already-loaded track prompts a confirmation warning
- Load Sample opens a file picker for the active track
- Record toggles recording for the active track
- **Play/Stop** (Header) toggles global transport (all tracks)
- **Audition** (Engine) provides momentary playback for the active track
- Track Level and Mute affect only the active track
- Loop Start/Length/XFade apply to the active track
- Mosaic enable toggles the post-tape granular buffer per track
- Ring enable toggles the post-tape filter device per track (Silk device)
- Modul8 enable toggles the post-tape modulation device per track
- G8 enable toggles the post-tape trance gate device per track
- Texture enable toggles the post-tape Texture/Deform device per track
- Reflect enable toggles the post-tape Reflect/Vast device per track
- Void Seed includes Moog filter + drive with PRE/POST toggle and Close Decay
- Save/Load Project stores track paths and loop/mix state
- Browser opens the project/library panel for quick loading and folder management
- Settings panel is a modal for standalone audio device configuration
- The engine controls are hidden until an engine is loaded for the active track
- Tape parameters are organized in a 4x3 grid for efficient control
- Animate includes a chromatic keybed for note triggering
- FMMI includes utility modes for Randomize, Clear, and Copy/Paste across step/parameter scopes
- Keyboard shortcuts (standalone): Space toggles Play/Stop, Escape closes modals
- Visualizer modes: oscilloscope, spectrum, vectorscope

## Project Files

Project files are saved as `.tlbx` (JSON-based) and include:

- Sample path per track (if loaded)
- Track level and mute state
- Loop start/length/x-fade and loop enabled state

## Notes

- This project is an early-stage implementation focused on Phase 1 behavior. Device models and modulation are planned next.
- Mosaic DSP is now mapped to the UI controls with smoothed parameter changes.
- The S-4 manual is included under `3rd-party/docs/` for reference.

## License

Proprietary — All rights reserved.
