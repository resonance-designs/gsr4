---
title: Animate Engine
sidebar_position: 10
---

# Animate Engine (Vector)

The Animate Engine is a versatile vector synthesis engine featuring four oscillator slots, a vector X-Y modulation pad, and an integrated sequencer.

## Oscillator Slots (A, B, C, D)

Each of the four slots can be configured independently:

- **Type**: Choose between **Wavetable** or **Sample** playback.
- **Level**: Individual gain for each slot.
- **Pitch**: Coarse and Fine pitch controls.
- **Pan**: Stereo positioning per slot.
- **Filter**: Each slot (currently primarily Slot A in the UI) has a dedicated filter with multiple types (Moog, High-Pass, Band-Pass), Cutoff, and Resonance.
- **Envelope**: Slot A features a full ADSR (Attack, Decay, Sustain, Release) envelope.

### Wavetable Mode
- **Selector**: Choose from a wide variety of included wavetables.
- **WT LFO**: A dedicated LFO for modulating the wavetable position, with Shape, Rate, and BPM Sync options.

### Sample Mode
- **Selector**: Choose from included samples.
- **Controls**: Adjust Sample Start, Loop Start, and Loop End.

## Vector Modulation

The core of Animate is the **Vector X-Y Pad**, which balances the levels between the four oscillator slots:
- **X-axis**: Blends between Slots A/B and Slots C/D.
- **Y-axis**: Blends between Slots A/C and Slots B/D.

### Vector LFOs
Two independent LFOs (X and Y) can automate the movement of the vector position, with adjustable Waveform, Rate, Amount, and BPM Sync.

## Sequencer

Animate includes a multi-lane, multi-page sequencer:
- **Grid**: A 16-step grid for triggering events.
- **Pages**: Navigate through 8 pages for a total of 128 steps.
- **Keybed**: A chromatic keybed for selecting notes and auditioning sounds.

## Downstream Devices

Like all engines in TLBX-1, Animate feeds into the shared downstream device chain:
- **Granulator**
- **Silk**
- **Modul8**
- **G8** (Trance Gate)
- **Texture**
- **Reflect**
