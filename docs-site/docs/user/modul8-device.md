---
title: Modul8 Device
---

# Modul8 Device (8 LFO Modulators)

Modul8 is an 8‑LFO modulation device that can target engine parameters and the downstream chain. Each LFO is independently configurable and can be routed to a single destination at a time.

## Controls (Per LFO)

- **Waveform**: Sine, Triangle, Saw, Square, Sample & Hold
- **Rate**: Free‑running rate (Hz) or tempo‑synced
- **Sync**: Enable BPM sync
- **Division**: Tempo division when synced
- **Amount**: Modulation depth
- **Bias (Center)**: Sets the center point of the LFO within the target’s range
- **Destination**: Parameter to modulate (scoped to the loaded engine + downstream devices)

## Amount Behavior

- **0%**: No modulation (parameter stays at its base value)
- **100%**: Full sweep across the parameter’s allowed range

## Runtime Behavior

- LFOs run when transport is playing.
- Changing a destination back to **None** restores the parameter’s base value.

## Routing Rules

- Destinations are scoped per‑engine to avoid invalid targets.
- Downstream device parameters (Granulator, Silk, Texture, Reflect) are always available.
- Modul8 is placed in the downstream section before G8.
