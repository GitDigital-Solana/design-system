//! GitDigital Design System — Rust/WASM token bindings.
//! Author: Rickcreator1987 & RickCreator87 

use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ColorTokens {
    pub solana_purple: String,
    pub solana_green: String,
    pub solana_blue: String,
    pub bg_primary: String,
    pub bg_card: String,
}

impl Default for ColorTokens {
    fn default() -> Self {
        Self {
            solana_purple: "#9945FF".into(),
            solana_green: "#14F195".into(),
            solana_blue: "#00D1FF".into(),
            bg_primary: "#0D0D0D".into(),
            bg_card: "#1A1A1A".into(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DesignTokens {
    pub colors: ColorTokens,
    pub version: String,
}

impl Default for DesignTokens {
    fn default() -> Self {
        Self { colors: ColorTokens::default(), version: "0.1.0".into() }
    }
}

#[wasm_bindgen]
pub fn generate_css_tokens() -> String {
    let tokens = DesignTokens::default();
    let mut css = String::from(":root {\n");
    css.push_str(&format!("  --gd-color-purple: {};\n", tokens.colors.solana_purple));
    css.push_str(&format!("  --gd-color-green: {};\n", tokens.colors.solana_green));
    css.push_str(&format!("  --gd-color-blue: {};\n", tokens.colors.solana_blue));
    css.push_str(&format!("  --gd-bg-primary: {};\n", tokens.colors.bg_primary));
    css.push_str(&format!("  --gd-bg-card: {};\n", tokens.colors.bg_card));
    css.push_str("}\n");
    css
}

#[wasm_bindgen]
pub fn token_count() -> usize {
    5
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_default_colors() {
        let c = ColorTokens::default();
        assert_eq!(c.solana_purple, "#9945FF");
        assert_eq!(c.solana_green, "#14F195");
    }

    #[test]
    fn test_css_generation() {
        let css = generate_css_tokens();
        assert!(css.contains("--gd-color-purple"));
        assert!(css.contains(":root {"));
    }
}
