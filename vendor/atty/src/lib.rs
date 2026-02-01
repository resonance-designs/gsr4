//! Shim replacement for the unmaintained `atty` crate.
//!
//! This uses `std::io::IsTerminal` (stable since Rust 1.70) to avoid the
//! Windows unaligned pointer issue reported in atty.

use std::io::{self, IsTerminal};

/// Terminal stream selection, matching the `atty` public API.
#[derive(Copy, Clone, Debug, Eq, PartialEq, Hash)]
pub enum Stream {
    Stdin,
    Stdout,
    Stderr,
}

/// Returns true if the specified stream is connected to a terminal.
pub fn is(stream: Stream) -> bool {
    match stream {
        Stream::Stdin => io::stdin().is_terminal(),
        Stream::Stdout => io::stdout().is_terminal(),
        Stream::Stderr => io::stderr().is_terminal(),
    }
}

/// Returns true if the specified stream is not connected to a terminal.
pub fn isnt(stream: Stream) -> bool {
    !is(stream)
}
