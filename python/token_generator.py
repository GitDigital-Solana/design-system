"""GitDigital Design System — Token Generator (Python)."""

from dataclasses import dataclass, field
from typing import Dict, List
import json


@dataclass
class ColorTokens:
    solana_purple: str = "#9945FF"
    solana_green: str = "#14F195"
    solana_blue: str = "#00D1FF"
    bg_primary: str = "#0D0D0D"
    bg_card: str = "#1A1A1A"
    text_primary: str = "#FFFFFF"
    text_secondary: str = "#A0A0A0"


@dataclass
class SpacingTokens:
    xs: str = "4px"
    sm: str = "8px"
    md: str = "16px"
    lg: str = "24px"
    xl: str = "32px"


@dataclass
class DesignTokenSet:
    colors: ColorTokens = field(default_factory=ColorTokens)
    spacing: SpacingTokens = field(default_factory=SpacingTokens)
    version: str = "0.1.0"

    def to_dict(self) -> Dict:
        return {
            "version": self.version,
            "colors": self.colors.__dict__,
            "spacing": self.spacing.__dict__,
        }

    def to_json(self, indent: int = 2) -> str:
        return json.dumps(self.to_dict(), indent=indent)

    def to_css_variables(self) -> str:
        lines = [":root {"]
        for k, v in self.colors.__dict__.items():
            lines.append(f"  --gd-color-{k.replace('_', '-')}: {v};")
        for k, v in self.spacing.__dict__.items():
            lines.append(f"  --gd-space-{k}: {v};")
        lines.append("}")
        return "\n".join(lines)

    def generate_report(self) -> str:
        report = ["# GitDigital Design Token Report\n"]
        report.append(f"Version: {self.version}\n")
        report.append(f"Color tokens: {len(self.colors.__dict__)}")
        report.append(f"Spacing tokens: {len(self.spacing.__dict__)}")
        report.append(f"Total: {len(self.colors.__dict__) + len(self.spacing.__dict__)}")
        return "\n".join(report)


if __name__ == "__main__":
    tokens = DesignTokenSet()
    print(tokens.to_json())
    print("\n---\n")
    print(tokens.to_css_variables())
    print("\n---\n")
    print(tokens.generate_report())
