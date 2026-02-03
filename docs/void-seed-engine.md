---
title: Void Seed Engine
---

# Void Seed Engine (Generative Drone)

Void Seed is a generative drone synthesizer designed for creating evolving textures, dark atmospheres, and chaotic soundscapes.

## Performance Maps

Void Seed uses two primary X-Y pads for expressive control:

- **Chaos / Entropy Map**:
  - **X-axis (Chaos)**: Controls the depth of chaotic modulation within the oscillator swarm.
  - **Y-axis (Entropy)**: Adjusts the overall randomness and complexity of the generated sound.
- **Pan / Width Map**:
  - **X-axis (Pan)**: Sets the center of the stereo image.
  - **Y-axis (Width)**: Expands the drone from mono to wide stereo.

## Main Controls

- **Open/Close Void**: A large toggle button to activate the drone.
- **Close Decay**: Sets how long the drone takes to fade out after closing the "Void."
- **Gain**: Vertical slider for the final output level.
- **Base Freq**: Sets the fundamental frequency of the oscillator swarm.
- **Mod Rate**: Adjusts the speed of the internal chaotic modulators.
- **Feedback**: Controls the amount of signal fed back into the internal delay network.
- **Diffusion**: Adjusts the density and "smearing" of the delay reflections.

## Filter & Drive

Void Seed includes a dedicated Moog-style filter and drive circuit:
- **Moog Cut**: Filter cutoff frequency.
- **Moog Res**: Filter resonance.
- **Drive**: Amount of saturation/overdrive.
- **Pre/Post**: Toggles whether the filter is placed before or after the drive stage.

## Downstream Devices

Void Seed feeds into the shared downstream device chain:
- **Granulator**
- **Silk**
- **G8** (Trance Gate)
- **Texture**
- **Reflect**
