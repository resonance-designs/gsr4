/**
 * GrainRust - A Rust-based granular audio sampler.
 * Copyright (C) 2026 Richard Bakos @ Resonance Designs.
 * Author: Richard Bakos <info@resonancedesigns.dev>
 * Website: https://resonancedesigns.dev
 * Version: 0.1.4
 * Component: Main Entry Point
 */

#[cfg(not(feature = "ui-testing"))]
use nih_plug::prelude::*;
#[cfg(not(feature = "ui-testing"))]
use grainrust::GrainRust;

fn main() {
    #[cfg(feature = "ui-testing")]
    {
        grainrust::run_ui_testing();
        return;
    }

    #[cfg(not(feature = "ui-testing"))]
    {
        let mut args: Vec<String> = std::env::args().collect();
        #[cfg(target_os = "windows")]
        {
            let has_period_size = args.iter().any(|arg| arg == "-p" || arg == "--period-size");
            if !has_period_size {
                // WASAPI can deliver larger buffers than the 512 default, so pick a safer size.
                args.push("--period-size".to_string());
                args.push("2048".to_string());
            }
        }
        nih_export_standalone_with_args::<GrainRust, _>(args);
    }
}
