---
title: State & Synchronization
sidebar_position: 5
---

# State & Synchronization

Managing state between a high-priority audio thread and a low-priority UI thread is one of the most critical aspects of TLBX-1.

## Parameter Management
TLBX-1 uses the `nih-plug` parameter system to manage all automatable values.

### The `Params` Struct
Defined in `src/lib.rs`, the `Params` struct contains every control available to the user. Each parameter is wrapped in a type like `FloatParam`, `IntParam`, or `BoolParam`.
- **Normalization**: `nih-plug` handles the conversion between "real-world" values (like Decibels or Hertz) and a normalized `0.0` to `1.0` range.
- **Automation**: By using this system, all TLBX-1 controls automatically support DAW automation and MIDI mapping.

## Thread Synchronization
To avoid data races and audio glitches, TLBX-1 uses **Atomics** for all real-time communication.

### Atomic Float Pattern
Since Rust does not have a native `AtomicF32` on all platforms, TLBX-1 uses the **bit-casting pattern**:
```rust
// Writing a value (UI Thread)
atomic_u32.store(value.to_bits(), Ordering::Relaxed);

// Reading a value (Audio Thread)
let value = f32::from_bits(atomic_u32.load(Ordering::Relaxed));
```

### ParamSetter
When the UI needs to update a parameter, it must use the `ParamSetter`. This ensures that the update is:
1. Thread-safe.
2. Reported to the host DAW for automation recording.
3. Propagated to the audio thread correctly.

## Project Persistence (.tlbx)
TLBX-1 uses a custom project format with the `.tlbx` extension.
- **Format**: JSON-based serialization.
- **Contents**: Stores all parameter states, track configurations, and references to loaded samples.
- **Exporting**: The "Export" feature bundles the `.tlbx` file and all associated audio samples into a single `.zip` archive for easy sharing between systems.

## Global Clock Synchronization
The audio engine maintains a master clock that is synchronized to the host transport.
- **BPM/Tempo**: Read from the host via `nih-plug`'s `ProcessContext`.
- **Phase Locking**: If the host is playing, TLBX-1 aligns its internal step sequencers and LFOs to the host's beat position.
- **Standalone Mode**: In standalone mode, TLBX-1 uses an internal high-precision timer to drive the clock.
