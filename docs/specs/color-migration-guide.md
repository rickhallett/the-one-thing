# Color Migration Guide: Awake → Oceanheart UI Theme

## Overview
This guide provides a comprehensive color migration strategy to align awake.oceanheart.ai with the Oceanheart UI's DaisyUI Synthwave theme, creating visual consistency across the Oceanheart.ai ecosystem.

## Current vs Target Color Schemes

### Current Awake.oceanheart.ai Palette
```css
--ink: #1a1a1a;      /* Primary text - dark gray */
--mist: #f8f7f4;     /* Light background - off-white */
--stone: #6b6966;    /* Secondary text - medium gray */
--gold: #c9a961;     /* Accent - golden */
--plum: #8b5a7e;     /* Primary accent - purple-pink */
--jade: #557b6e;     /* Secondary accent - green */
--rust: #a65d5d;     /* Tertiary accent - reddish */
--cloud: #e8e6e1;    /* Light gray background */
--paper: #fefdfb;    /* Main background - near white */
--void: #0a0a0a;     /* Footer/dark sections - near black */
```

### Target Oceanheart UI (Synthwave) Palette
```css
primary: #e779c1;           /* Hot pink */
secondary: #58c7f3;         /* Cyan blue */
accent: #f4e409;            /* Yellow (oklch: 88.04% 0.206 93.72) */
neutral: #221551;           /* Deep purple */
neutral-content: #f9f7fd;   /* Light purple-white */
base-100: #1a103d;          /* Dark purple background */
base-content: #f9f7fd;      /* Light purple-white text */
info: #53c0f3;              /* Light blue */
success: #71ead2;           /* Mint green */
warning: #eace6c;           /* Yellow-orange */
error: #ec8c78;             /* Coral red */
```

## Migration Mapping

### Primary Color Transitions

| Current Variable | Current Value | Target Variable | Target Value | Usage |
|-----------------|--------------|----------------|-------------|--------|
| `--plum` | #8b5a7e | `primary` | #e779c1 | Primary accents, CTAs, highlights |
| `--ink` | #1a1a1a | `base-content` | #f9f7fd | Main text color (inverted for dark theme) |
| `--paper` | #fefdfb | `base-100` | #1a103d | Main background (inverted for dark theme) |
| `--mist` | #f8f7f4 | `neutral` | #221551 | Section backgrounds |
| `--stone` | #6b6966 | `neutral-content` | #f9f7fd | Secondary text |
| `--gold` | #c9a961 | `accent` | #f4e409 | Special highlights, badges |
| `--jade` | #557b6e | `success` | #71ead2 | Success states, positive elements |
| `--rust` | #a65d5d | `error` | #ec8c78 | Error states, warnings |
| `--cloud` | #e8e6e1 | `base-200` | #140b2d | Subtle backgrounds (darker variant) |
| `--void` | #0a0a0a | `base-300` | #0f0821 | Footer, dark sections |

## Implementation Steps

### Phase 1: CSS Variable Updates
Replace the `:root` variables in `globals.css`:

```css
:root {
    /* Synthwave Theme Colors */
    --primary: #e779c1;
    --primary-content: #201047;
    --secondary: #58c7f3;
    --secondary-content: #201047;
    --accent: #f4e409;
    --accent-content: #201047;
    --neutral: #221551;
    --neutral-content: #f9f7fd;
    --base-100: #1a103d;
    --base-200: #140b2d;
    --base-300: #0f0821;
    --base-content: #f9f7fd;
    
    /* Semantic colors */
    --info: #53c0f3;
    --info-content: #201047;
    --success: #71ead2;
    --success-content: #201047;
    --warning: #eace6c;
    --warning-content: #201047;
    --error: #ec8c78;
    --error-content: #201047;
    
    /* Legacy mappings for gradual migration */
    --ink: var(--base-content);
    --mist: var(--neutral);
    --stone: var(--neutral-content);
    --gold: var(--accent);
    --plum: var(--primary);
    --jade: var(--success);
    --rust: var(--error);
    --cloud: var(--base-200);
    --paper: var(--base-100);
    --void: var(--base-300);
}
```

### Phase 2: Background Adjustments

#### Body Background
```css
body {
    background: var(--base-100); /* Dark purple instead of paper white */
    color: var(--base-content);  /* Light text for dark background */
}

/* Add synthwave gradient overlay */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(135deg, 
            rgba(231, 121, 193, 0.1) 0%,
            rgba(88, 199, 243, 0.1) 50%,
            rgba(244, 228, 9, 0.05) 100%);
    pointer-events: none;
    z-index: -1;
}
```

#### Section Backgrounds
```css
.story-section.paper { 
    background: var(--base-100); 
}

.story-section.mist { 
    background: var(--base-200); 
}

.deep-dive-section {
    background: var(--neutral);
}

.pricing-section {
    background: var(--base-100);
}
```

### Phase 3: Typography Updates

```css
/* Headings */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Serif', serif;
    color: var(--primary); /* Hot pink headings */
    text-shadow: 0 0 20px rgba(231, 121, 193, 0.5);
}

/* Body text */
p, li {
    color: var(--base-content);
    opacity: 0.9;
}

/* Links */
a {
    color: var(--secondary);
    transition: all 0.3s ease;
}

a:hover {
    color: var(--accent);
    text-shadow: 0 0 10px currentColor;
}
```

### Phase 4: Component Styling

#### Navigation
```css
nav {
    background: linear-gradient(
        to bottom, 
        rgba(26, 16, 61, 0.95) 70%, 
        transparent
    );
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--primary);
}

.nav-links a {
    color: var(--secondary);
}

.nav-links a:hover {
    color: var(--accent);
    text-shadow: 0 0 15px currentColor;
}

.nav-links a::after {
    background: var(--accent);
}
```

#### Buttons/CTAs
```css
.cta-primary {
    background: linear-gradient(
        135deg, 
        var(--primary) 0%, 
        var(--secondary) 100%
    );
    color: var(--base-100);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
}

.cta-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        var(--accent),
        transparent
    );
    transition: left 0.5s ease;
}

.cta-primary:hover::before {
    left: 100%;
}

.cta-primary:hover {
    box-shadow: 
        0 0 20px var(--primary),
        0 0 40px var(--secondary);
}
```

#### Cards/Pillars
```css
.pillar {
    background: rgba(26, 16, 61, 0.6);
    border: 1px solid var(--primary);
    backdrop-filter: blur(10px);
}

.pillar::before {
    background: linear-gradient(
        to bottom,
        var(--primary),
        var(--secondary)
    );
}

.pillar:hover {
    border-color: var(--accent);
    box-shadow: 
        0 0 30px rgba(231, 121, 193, 0.3),
        inset 0 0 20px rgba(88, 199, 243, 0.1);
}

.pillar-label {
    color: var(--accent);
    text-shadow: 0 0 10px currentColor;
}
```

### Phase 5: Special Effects

#### Neon Glow Effects
```css
/* Add to elements needing emphasis */
.neon-glow {
    animation: neon-pulse 2s ease-in-out infinite;
}

@keyframes neon-pulse {
    0%, 100% {
        text-shadow: 
            0 0 5px var(--primary),
            0 0 10px var(--primary),
            0 0 15px var(--primary),
            0 0 20px var(--secondary);
    }
    50% {
        text-shadow: 
            0 0 10px var(--primary),
            0 0 20px var(--primary),
            0 0 30px var(--primary),
            0 0 40px var(--secondary);
    }
}
```

#### Grid/Retro Pattern
```css
.synthwave-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(231, 121, 193, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(88, 199, 243, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: -1;
}
```

### Phase 6: Form Elements

```css
input, textarea, select {
    background: rgba(34, 21, 81, 0.8);
    border: 1px solid var(--primary);
    color: var(--base-content);
}

input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 
        0 0 10px var(--accent),
        inset 0 0 5px rgba(244, 228, 9, 0.2);
}
```

## Mobile/Responsive Considerations

```css
@media (max-width: 768px) {
    /* Reduce glow effects on mobile for performance */
    .neon-glow {
        animation: none;
        text-shadow: 0 0 10px var(--primary);
    }
    
    /* Simplify gradients */
    .cta-primary {
        background: var(--primary);
    }
}

/* Dark mode is default with synthwave */
@media (prefers-color-scheme: light) {
    /* User prefers light mode - provide alternative */
    :root {
        /* Could switch to a lighter cyberpunk variant */
    }
}
```

## Accessibility Notes

1. **Contrast Ratios**: Ensure text meets WCAG AA standards
   - Light text (#f9f7fd) on dark purple (#1a103d): ~14.5:1 ✓
   - Pink text (#e779c1) on dark purple (#1a103d): ~7.8:1 ✓

2. **Focus Indicators**: Add visible focus states
   ```css
   *:focus-visible {
       outline: 2px solid var(--accent);
       outline-offset: 2px;
   }
   ```

3. **Reduce Motion**: Respect user preferences
   ```css
   @media (prefers-reduced-motion: reduce) {
       * {
           animation-duration: 0.01ms !important;
           animation-iteration-count: 1 !important;
           transition-duration: 0.01ms !important;
       }
   }
   ```

## Implementation Checklist

- [ ] Back up current styles
- [ ] Update CSS variables in `:root`
- [ ] Update body and base styles
- [ ] Migrate navigation styles
- [ ] Update button/CTA styles
- [ ] Convert card/pillar components
- [ ] Update form elements
- [ ] Add synthwave special effects
- [ ] Test contrast ratios
- [ ] Test responsive breakpoints
- [ ] Add focus indicators
- [ ] Test with screen readers
- [ ] Cross-browser testing
- [ ] Performance optimization (reduce animations on mobile)

## Rollback Plan

Keep the original CSS file as `globals.css.backup` and maintain feature flags:

```javascript
// In layout or config
const USE_SYNTHWAVE_THEME = process.env.NEXT_PUBLIC_USE_SYNTHWAVE || false;

// Conditionally load styles
import USE_SYNTHWAVE_THEME ? './globals-synthwave.css' : './globals.css';
```

## Testing Matrix

| Browser | Desktop | Mobile | Tablet |
|---------|---------|--------|--------|
| Chrome | [ ] | [ ] | [ ] |
| Firefox | [ ] | [ ] | [ ] |
| Safari | [ ] | [ ] | [ ] |
| Edge | [ ] | [ ] | [ ] |

## Performance Metrics to Monitor

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Animation frame rate (target 60fps)

## Notes for Claude Code Implementation

When implementing:

1. Start with CSS variable updates for easy rollback

3. Use CSS custom properties for all colors (no hardcoded values)
4. Maintain semantic class names
5. Document any breaking changes
6. Consider creating a theme toggle for comparison
7. Preserve all accessibility features
8. Keep animations GPU-accelerated with `transform` and `opacity`

## Resources

- [DaisyUI Synthwave Theme](https://daisyui.com/themes/)
- [Synthwave Color Palette](https://colorhunt.co/palette/2d033b810ca8c147e9e5b8f4)
- [Neon CSS Effects](https://css-tricks.com/how-to-create-neon-text-with-css/)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)