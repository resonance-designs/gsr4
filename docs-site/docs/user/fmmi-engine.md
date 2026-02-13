---
title: FMMI Engine
sidebar_position: 14
---

# FMMI Engine (FM Synth + Sequencer)

FMMI is a two-operator FM engine with per-step parameter locks, utility functions, and the full downstream device chain.

## Global Synthesis Section

FMMI is split into **Carrier** and **Modulator** sections:

- **Carrier**: Wave, Freq, Detune, Output, and Drive.
- **Modulator**: Wave, Mode (**Hz** or **Ratio**), Mod Freq/Ratio, Detune, Index, and Feedback.
- **Amp Envelope**: ADSR controls the output envelope.
- **Mono/Poly**: Toggle between classic mono behavior (new notes cut) and poly mode (overlapping tails).

The top randomization button in this section randomizes **global FMMI engine parameters only** (not sequencer steps/locks).

## Sequencer

- **Grid**: 16 steps per page.
- **Pages**: 8 pages (128 total steps).
- **Step Editor**: Select a target step and edit per-step overrides.
- **Current Step Highlight**: Playback position and edited step are visually indicated.
- **Probability**: Per‑lane note trigger probability (0–100%).

## Scale & Keybed

- **Scale**: Select a scale to constrain randomized notes.
- **Keybed Highlight**: Notes in the selected scale are highlighted.
- **Scales JSON**: Add/edit scales in `src/ui/assets/scales.json`.

## Utility Functions

FMMI includes a **Utility Functions** mode switch with three modes:

1. **Randomize**
   - Steps: Page / All
   - Params: Page / All
   - Both: Page / All
   - **Amount (Params)**: How far randomized parameter values deviate from their current values.
   - **Amount (Steps)**: How dense the step on/off randomization is.
2. **Clear**
   - Steps: Page / All
   - Params: Page / All
   - Both: Page / All
3. **Copy/Paste**
   - Copy Steps / Params / Both (Page or All)
   - Single **Paste** action applies the current clipboard payload

## Step Params (Per-Step Overrides)

FMMI step params support:

- Note selection
- Carrier wave override
- Modulator wave override
- Modulator mode override (Hz/Ratio)
- Carrier frequency and detune
- Modulator frequency/ratio and detune
- Mod index
- Mod feedback
- Drive
- Output level
- Amp envelope (Attack, Decay, Sustain, Release)
- Gate length (ms)

Gate length can be set to any positive value manually. Randomization and Modul8 modulation cap gate length at **3 seconds**.

## Randomization Masks (Per-Parameter On/Off)

Each step parameter has an on/off randomization mask.  
When a mask is off, that parameter is excluded from step-parameter randomization actions.

## Downstream Devices

FMMI feeds into the same downstream chain as other engines:

- **Granulator**
- **Silk**
- **Modul8**
- **G8** (Trance Gate)
- **Texture**
- **Reflect**
