# GitDigital Design System — Julia Analytics Module
# Author: Rickcreator1987

module GitDigitalDesignSystem

export ColorToken, SpacingToken, DesignSystem, contrast_ratio, audit_accessibility

struct ColorToken
    name::String
    hex::String
    rgb::NTuple{3, Int}
end

struct SpacingToken
    name::String
    px::Int
end

struct DesignSystem
    colors::Vector{ColorToken}
    spacing::Vector{SpacingToken}
    version::String
end

function hex_to_rgb(hex::String)
    h = replace(hex, "#" => "")
    r = parse(Int, h[1:2], base=16)
    g = parse(Int, h[3:4], base=16)
    b = parse(Int, h[5:6], base=16)
    return (r, g, b)
end

function default_system()::DesignSystem
    colors = [
        ColorToken("solana-purple", "#9945FF", hex_to_rgb("#9945FF")),
        ColorToken("solana-green",  "#14F195", hex_to_rgb("#14F195")),
        ColorToken("bg-primary",    "#0D0D0D", hex_to_rgb("#0D0D0D")),
        ColorToken("text-primary",  "#FFFFFF", hex_to_rgb("#FFFFFF")),
    ]
    spacing = [
        SpacingToken("xs", 4), SpacingToken("sm", 8),
        SpacingToken("md", 16), SpacingToken("lg", 24),
    ]
    DesignSystem(colors, spacing, "0.1.0")
end

function relative_luminance(rgb::NTuple{3, Int})::Float64
    channels = map(c -> begin
        s = c / 255.0
        s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055)^2.4
    end, rgb)
    return 0.2126 * channels[1] + 0.7152 * channels[2] + 0.0722 * channels[3]
end

function contrast_ratio(c1::ColorToken, c2::ColorToken)::Float64
    l1 = relative_luminance(c1.rgb)
    l2 = relative_luminance(c2.rgb)
    lighter, darker = max(l1, l2), min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)
end

function audit_accessibility(ds::DesignSystem)::Dict{String, Any}
    results = Dict{String, Any}()
    for i in 1:length(ds.colors), j in (i+1):length(ds.colors)
        c1, c2 = ds.colors[i], ds.colors[j]
        ratio = contrast_ratio(c1, c2)
        key = "$(c1.name) vs $(c2.name)"
        results[key] = Dict(
            "ratio" => round(ratio, digits=2),
            "wcag_aa" => ratio >= 4.5,
            "wcag_aaa" => ratio >= 7.0,
        )
    end
    return results
end

end # module
