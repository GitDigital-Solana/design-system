// GitDigital Design System — Design Tokens
// Author: Rickcreator1987 & RickCreator87 

export interface ColorTokens {
  solanaPurple: string;
  solanaGreen: string;
  solanaBlue: string;
  bgPrimary: string;
  bgSecondary: string;
  bgCard: string;
  textPrimary: string;
  textSecondary: string;
  success: string;
  warning: string;
  error: string;
}

export const colors: ColorTokens = {
  solanaPurple: '#9945FF',
  solanaGreen: '#14F195',
  solanaBlue: '#00D1FF',
  bgPrimary: '#0D0D0D',
  bgSecondary: '#141414',
  bgCard: '#1A1A1A',
  textPrimary: '#FFFFFF',
  textSecondary: '#A0A0A0',
  success: '#14F195',
  warning: '#FFB800',
  error: '#FF4D4D',
};

export interface SpacingTokens {
  xs: string; sm: string; md: string; lg: string; xl: string; xxl: string;
}

export const spacing: SpacingTokens = {
  xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px', xxl: '48px',
};

export interface TypographyTokens {
  fontFamily: string;
  fontMono: string;
  sizes: Record<string, string>;
  weights: Record<string, number>;
}

export const typography: TypographyTokens = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', monospace",
  sizes: {
    xs: '0.75rem', sm: '0.875rem', base: '1rem',
    lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem',
    '3xl': '1.875rem', '4xl': '2.25rem',
  },
  weights: { normal: 400, medium: 500, semibold: 600, bold: 700, black: 900 },
};

export interface RadiusTokens {
  none: string; sm: string; md: string; lg: string; full: string;
}

export const radius: RadiusTokens = {
  none: '0', sm: '4px', md: '8px', lg: '12px', full: '9999px',
};

export interface DesignTokens {
  colors: ColorTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  radius: RadiusTokens;
}

export const tokens: DesignTokens = { colors, spacing, typography, radius };

export function generateCSSTokens(t: DesignTokens): string {
  const lines: string[] = [':root {'];
  for (const [key, value] of Object.entries(t.colors)) {
    lines.push(`  --gd-color-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(t.spacing)) {
    lines.push(`  --gd-space-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(t.radius)) {
    lines.push(`  --gd-radius-${key}: ${value};`);
  }
  lines.push('}');
  return lines.join('\n');
    }
