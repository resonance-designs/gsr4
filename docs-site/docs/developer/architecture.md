---
title: Architecture Overview
sidebar_position: 2
---

# Architecture Overview

TLBX-1 is a high-performance, 4-track granular sampler and synthesizer built with **Rust**, **nih-plug**, and **Slint**. It is designed to function as both a standalone application and a professional audio plugin (VST3/CLAP).

## Core Philosophy
The project follows a **data-oriented design** with a strict separation between the high-priority audio processing thread and the lower-priority UI/Event thread. All communication between these threads is **lock-free** to ensure glitch-free audio performance.

## System Architecture

### 1. The Host Wrapper (`nih-plug`)
The entry point for the plugin is `lib.rs`, which implements the `Plugin` trait from the `nih-plug` crate. This handles:
- Audio buffer management.
- Parameter registration and automation.
- MIDI event processing.
- GUI lifecycle management.

### 2. The Monolithic Engine (`src/lib.rs`)
Due to the complexity of the 4-track routing and shared DSP resources, the core logic is currently centralized in `src/lib.rs`. This monolith manages:
- **Transport & Synchronization**: A global clock that stays in sync with the host DAW.
- **Track Management**: Four independent tracks, each capable of running different "engines" (Tape-Deck, Granulator, etc.).
- **Master Effects**: Global compression and filtering applied at the end of the signal chain.

### 3. DSP Engine (`fundsp`)
Audio processing is powered by `fundsp`. While some logic is imperative (the process loop), complex signal chains for specific engines (like the Silk or Texture devices) are built using `fundsp`'s functional composition.

### 4. UI Layer (`Slint`)
The user interface is defined in `.slint` files and compiled into highly efficient C++ or Rust code. 
- **Windowing**: Bridges `Slint`, `baseview`, and `softbuffer` for cross-platform rendering.
- **Component Kit**: Uses the **Resonance Designs Slint UI Component Kit** for standardized knobs, sliders, and visualizers.

## Threading Model

| Thread | Responsibility | Priority | Synchronization |
| :--- | :--- | :--- | :--- |
| **Audio Thread** | DSP Processing, Recording, Metering | Real-time | Atomic Reads/Writes |
| **UI Thread** | Rendering, Input Handling, Animation | Normal | Atomic Writes, Message Passing |
| **Background Thread** | File I/O, Project Loading/Saving | Low | Mutex/Channels |

## Data Flow
1. **Host** provides an audio buffer to the **Audio Thread**.
2. **Audio Thread** reads parameters (Atomic `f32` bits) and processes 4 tracks into a master buffer.
3. **Audio Thread** updates RMS/Peak meters (Atomic `f32` bits).
4. **UI Thread** polls meters and updates the Slint state.
5. **User Interaction** on the UI triggers callbacks that update parameters via `ParamSetter`.
