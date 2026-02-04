---
title: Granulator Device
sidebar_position: 21
---

# Granulator Device

The Granulator device is a post-engine granular processor fed by a 4-second buffer. It breaks the audio into small "grains" and recombines them to create textures, rhythmic patterns, and atmospheric effects.

## Controls

- **Pitch** (bipolar): Sets the pitch of the grains from ±36 semitones around the center.
- **Rate**: First half of the control locks to BPM divisions (1, 1/2, 1/4, 1/8, 1/16). Past the midpoint, it becomes a free-rate control (grains per second).
- **Size**: Adjusts the length/duration of each grain.
- **Contour** (bipolar): Shapes the volume envelope of the grains.
- **Warp / Spray / Pattern**: Controls position bias, timing randomness, and grain ordering/sequencing.
- **Wet**: Dry/wet mix of the granular processed signal.
- **Detune**: Adds random pitch spread to the grains for a thicker, more chorused sound.
- **Rand Rate / Rand Size**: Adds randomization depth to the grain rate and size.
- **SOS**: Sound-on-sound feedback, allowing the granular output to be fed back into its own buffer.

## Notes

All Granulator parameters are smoothed to reduce zipper noise and ensure fluid transitions during performance.
