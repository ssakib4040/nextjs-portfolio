# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# workflow
- Present the complete plan and analysis before writing any code. Don't jump to implementation until the plan is approved. Confidence: 0.75
- Only implement what was explicitly requested — do not add unsolicited features, UI elements, or content beyond the scope of the ask. Confidence: 0.80

# daisyui
- Use DaisyUI components for UI elements (navbar, tabs, dropdowns, cards) rather than building custom implementations. Confidence: 0.75
- For DaisyUI navbars, place brand/logo in navbar-start and navigation links in navbar-end (not navbar-center) for a standard left-right layout. Confidence: 0.60
- Use btn btn-ghost class on nav menu items (Link elements) inside DaisyUI navbars for consistent hover behavior (background + text color change). Confidence: 0.60

# ui
- For tab/pill toggles, use custom buttons (rounded-lg, bg-[#0D6EFD] text-white active, gray hover inactive) instead of DaisyUI tabs (tabs-boxed or tabs-bordered). Confidence: 0.70

