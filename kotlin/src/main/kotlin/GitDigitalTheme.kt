// GitDigital Design System — Kotlin / Jetpack Compose
// Author: Rickcreator1987

package org.gitdigital.designsystem

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.text.TextStyle

// ── Color Tokens ─────────────────────────────────────────────

data class GitDigitalColors(
    val solanaPurple: Color = Color(0xFF9945FF),
    val solanaGreen: Color = Color(0xFF14F195),
    val solanaBlue: Color = Color(0xFF00D1FF),
    val bgPrimary: Color = Color(0xFF0D0D0D),
    val bgCard: Color = Color(0xFF1A1A1A),
    val textPrimary: Color = Color(0xFFFFFFFF),
    val textSecondary: Color = Color(0xFFA0A0A0),
    val success: Color = Color(0xFF14F195),
    val warning: Color = Color(0xFFFFB800),
    val error: Color = Color(0xFFFF4D4D),
)

// ── Spacing Tokens ───────────────────────────────────────────

data class GitDigitalSpacing(
    val xs: Dp = 4.dp,
    val sm: Dp = 8.dp,
    val md: Dp = 16.dp,
    val lg: Dp = 24.dp,
    val xl: Dp = 32.dp,
)

// ── Typography ───────────────────────────────────────────────

val GitDigitalTypography = mapOf(
    "display" to TextStyle(fontSize = 36.sp, fontWeight = FontWeight.Black),
    "heading" to TextStyle(fontSize = 24.sp, fontWeight = FontWeight.Bold),
    "body" to TextStyle(fontSize = 16.sp, fontWeight = FontWeight.Normal),
    "caption" to TextStyle(fontSize = 12.sp, fontWeight = FontWeight.Medium),
)

// ── Composition Locals ───────────────────────────────────────

val LocalGitDigitalColors = staticCompositionLocalOf { GitDigitalColors() }
val LocalGitDigitalSpacing = staticCompositionLocalOf { GitDigitalSpacing() }

// ── Theme Wrapper ────────────────────────────────────────────

@Composable
fun GitDigitalTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit,
) {
    val colors = GitDigitalColors()
    val spacing = GitDigitalSpacing()

    val materialScheme = if (darkTheme) {
        darkColorScheme(
            primary = colors.solanaPurple,
            secondary = colors.solanaGreen,
            background = colors.bgPrimary,
            surface = colors.bgCard,
            onPrimary = colors.textPrimary,
            onBackground = colors.textPrimary,
            error = colors.error,
        )
    } else {
        lightColorScheme(
            primary = colors.solanaPurple,
            secondary = colors.solanaGreen,
        )
    }

    CompositionLocalProvider(
        LocalGitDigitalColors provides colors,
        LocalGitDigitalSpacing provides spacing,
    ) {
        MaterialTheme(
            colorScheme = materialScheme,
            content = content,
        )
    }
}

// ── Accessibility Audit ──────────────────────────────────────

object GitDigitalAudit {
    fun hexToRgb(hex: String): Triple<Int, Int, Int> {
        val h = hex.removePrefix("#")
        return Triple(
            h.substring(0, 2).toInt(16),
            h.substring(2, 4).toInt(16),
            h.substring(4, 6).toInt(16),
        )
    }

    fun relativeLuminance(rgb: Triple<Int, Int, Int>): Double {
        val channels = listOf(rgb.first, rgb.second, rgb.third).map { c ->
            val s = c / 255.0
            if (s <= 0.03928) s / 12.92 else Math.pow((s + 0.055) / 1.055, 2.4)
        }
        return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
    }

    fun contrastRatio(hex1: String, hex2: String): Double {
        val l1 = relativeLuminance(hexToRgb(hex1))
        val l2 = relativeLuminance(hexToRgb(hex2))
        val lighter = maxOf(l1, l2)
        val darker = minOf(l1, l2)
        return (lighter + 0.05) / (darker + 0.05)
    }
}
