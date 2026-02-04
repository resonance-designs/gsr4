---
title: SynDRM Engine
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
- **Probability**: Per-lane chance that an active step will trigger (0–100%).

## Sequencer

SynDRM features a powerful 128-step sequencer:
- **Grid**: 16 steps visible at a time.
- **Pages**: 8 pages of 16 steps each.
- **Lanes**: Independent trigger lanes for each drum channel.
- **Step Navigation**: Page and Step selectors are 1-based for quick navigation.

### Parameter Locks (Per-Step Automation)
SynDRM supports "parameter locks," allowing you to override channel settings on a per-step basis:
1. Select a step in the sequencer.
2. Adjust the parameters while the step is held or in "Step Edit" mode.
3. The sequencer will now apply those specific values only for that step.

### Per-Step Retrig
Each lane exposes a **Retrig** toggle and **Rate** selector (1/2 or 1/4), letting a single step fire multiple times within the step duration.

### Utility Functions
The **Utility Functions** section provides workflow tools for the current lane or all lanes:
- **Randomize**: Randomize Steps, Params, or Both, with a global **Amount** control.
- **Clear**: Clear Steps, Params, or Both.
- **Copy/Paste**:
  - Copy Steps/Params/Both for Lane+Page, Lane+All, All+Page, or All+All.
  - Paste applies to the current lane and page.
  - If the source is a single lane, parameters only paste back to the same lane; other lanes receive steps only.
  - If the source is all lanes, parameters paste to all lanes.

## Downstream Devices

SynDRM feeds into the shared downstream device chain:
- **Granulator**
- **Silk**
- **G8** (Trance Gate)
- **Texture**
- **Reflect**
