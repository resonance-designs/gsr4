---
title: Tape-Deck Engine
---

# Tape-Deck Engine

The Tape-Deck Engine is the primary material device for playing back audio samples. It simulates a tape-style workflow with looping, speed control, and various tape-oriented actions.

## Main Controls

- **Speed**: Controls the playback rate and direction of the tape-deck.
- **Rotate**: Offsets the starting position of the tape-deck playback.
- **Trigger Start**: Sets the position where playback starts when triggered.
- **Loop Start**: Sets the starting point of the loop within the sample.
- **Loop Length**: Sets the duration of the loop.
- **Glide**: Controls the time it takes for speed changes to take effect.
- **SOS (Sound on Sound)**: Controls the feedback level when recording or overdubbing.
- **Loop X-Fade**: Applies a crossfade at the loop points to smooth out transitions.

## Modes

- **Rate Mode**:
  - **Free**: Continuous speed control.
  - **Sync**: Locks speed to BPM-relative divisions (1/64 to 16).
  - **Tempo 1.5x**: Constant 1.5x speed relative to project tempo.
  - **Tempo 0.67x**: Constant 0.67x speed relative to project tempo.
- **Loop Mode**: Selects between different looping behaviors (e.g., Forward, Ping-Pong).

## Actions

- **Load Sample**: Opens a file dialog to load an audio or video file.
- **Save Sample**: Saves the current (potentially modified/overdubbed) sample.
- **Record**: Toggles recording of incoming audio into the buffer.
- **Audition**: Momentary playback of the track.
- **Reverse**: Toggles reverse playback.
- **Freeze**: Freezes the current playback position.
- **Keylock**: Maintains pitch while changing speed (time-stretching).
- **Monitor**: Routes input audio directly to the output.
- **Overdub**: Allows recording new audio on top of the existing content.

## Video Support

The Tape-Deck Engine has experimental support for loading video files. When a video is loaded:
- The waveform view is replaced by the video frame.
- Audio still drives the playback and timing.
- Rotations and trigger starts are reflected in the video preview.
