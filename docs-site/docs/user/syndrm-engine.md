---
title: SynDRM Engine
sidebar_position: 11
---

# SynDRM Engine (Drums)

SynDRM is a multi-channel drum synthesizer and sampler engine with an integrated step sequencer and per-step parameter automation.

## Drum Channels

SynDRM features several dedicated synth channels and a sample-based channel:

- **Kick**: Dedicated kick synth with Pitch, Decay, Attack, Pitch Env, Drive, and Filter.
- **Snare**: Dedicated snare synth with Tone, Decay, Snappy, Attack, Drive, and Filter.
- **Clap**: Clap synth with Pitch, Decay, Tone, Drive, and Filter.
- **Hat**: Hi-hat synth with Pitch, Decay, Tone, Drive, and Filter.
- **Perc 1 & 2**: Percussion synths with Pitch, Decay, Tone, Drive, and Filter.
- **Crash**: Cymbal/Crash synth with Pitch, Decay, Tone, Drive, and Filter.
- **Sampler**: A multi-slot sampler channel for loading custom drum samples.

## Common Channel Controls

Each channel includes:
- **Level**: Output volume.
- **Filter**: Multiple filter types with Cutoff and Resonance.
- **Drive**: Saturation/Distortion.
- **Cut Group / Cut By**: Choke group settings for mutual exclusion (e.g., Open/Closed Hats).

## Sequencer

SynDRM features a powerful 128-step sequencer:
- **Grid**: 16 steps visible at a time.
- **Pages**: 8 pages of 16 steps each.
- **Lanes**: Independent trigger lanes for each drum channel.

### Parameter Locks (Per-Step Automation)
SynDRM supports "parameter locks," allowing you to override channel settings on a per-step basis:
1. Select a step in the sequencer.
2. Adjust the parameters while the step is held or in "Step Edit" mode.
3. The sequencer will now apply those specific values only for that step.

## Downstream Devices

SynDRM feeds into the shared downstream device chain:
- **Granulator**
- **Silk**
- **G8** (Trance Gate)
- **Texture**
- **Reflect**
