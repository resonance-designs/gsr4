---
title: Audio Engine
sidebar_position: 3
---

# Audio Engine

The TLBX-1 audio engine is a hybrid system combining imperative loop-based processing with functional DSP graphs.

## Core Processing Loop
The `process` function in `src/lib.rs` is the heartbeat of the application. It executes every time the host (DAW or Standalone driver) requests a new buffer of audio.

### Step-by-Step Processing
1. **Clock Update**: Updates the master phase and step index (0-15) based on the current tempo and sample rate.
2. **Recording**: If a track is in recording mode, input audio is written directly into the track's sample buffer.
3. **Track Iteration**: Processes each of the 4 tracks sequentially:
   - **Engine Dispatch**: Calls the specific processing function for the loaded engine (e.g., `process_animate`, `process_syndrm`).
   - **Internal Buffering**: Each track renders into a local `track_buffer`.
4. **Master Chain**: Sums the 4 track buffers and applies the master compressor and filter.
5. **Metering**: Calculates the peak level for each track and the master output, storing them in atomic variables for the UI.

## Engines and Devices

### Engines (The Sound Sources)
Engines are responsible for generating or manipulating raw audio data.
- **Tape-Deck**: A playback/looping engine with variable speed and transport-style controls.
- **Animate**: A vector synthesis engine with sequencing.
- **SynDRM**: A percussion-focused multi-lane drum engine.
- **Void Seed**: A generative drone/noise engine.
- **FMMI**: A two-operator FM engine with per-step parameter overrides.

### Devices (The Effects)
Each track can run a downstream chain of effect devices.
- **Granulator**: A granular processor for texture, spray, and rhythmic slicing.
- **Silk**: A resonator/filter-style shaping stage.
- **Modul8**: An 8‑LFO modulation device targeting engine + downstream parameters.
- **G-8**: A performance-oriented gate and chopper.
- **Texture**: A multi-stage distortion and saturation module.
- **Reflect**: A delay/reverb spatial processor.

## DSP with `fundsp`
TLBX-1 uses `fundsp` for complex signal paths. 
- **Static Graphs**: Devices like `Silk` are defined as `fundsp` graphs.
- **Dynamic Parameters**: Parameters are passed into the graphs using `An` (Audio Node) wrappers, allowing for smooth parameter modulation.

## Thread Safety & Performance
- **No Allocations**: The audio thread NEVER allocates memory. All buffers (like `track_buffer`) are pre-allocated during initialization or when the sample rate changes.
- **Lock-Free**: While `Arc<Mutex<T>>` is used for sharing large data (like sample libraries), the audio thread uses `.try_lock()`. If a lock cannot be acquired immediately, the thread skips processing that frame or uses a cached value to avoid blocking.
