# Better Health Design System

## Color Palette

### Brand Colors
- `brand.green` (#2A5F3C) - Primary brand color for main elements, CTAs, and headers
- `brand.brown` (#E0CBB6) - Secondary brand color for backgrounds
- `brand.dark` (#1A3B25) - Darker green variant for hover states
- `brand.light` (#EBD9C7) - Lighter brown variant for hover states

### Text Colors
- `text.primary` (#2A5F3C) - Main text color
- `text.secondary` (#1A3B25) - Secondary text with better contrast
- `text.muted` (#4D4D4D) - Muted text (dark gray)
- `text.white` (#FFFFFF) - Text on dark backgrounds

### Status Colors
- `status.success` (#2A5F3C) - Success messages and indicators
- `status.error` (#CC3333) - Error messages
- `status.warning` (#B45309) - Warning messages
- `status.info` (#1A3B25) - Information messages

## Typography

### Headings
```tsx
// H1 - Main page titles
className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-green"

// H2 - Section headers
className="text-4xl font-bold text-brand-green"

// H3 - Subsection headers
className="text-2xl font-semibold text-brand-green"
```

### Body Text
```tsx
// Primary text
className="text-text-primary"

// Secondary text
className="text-text-secondary"

// Muted text
className="text-text-muted"
```

## Components

### Buttons
```tsx
// Primary Button
className="bg-brand-green text-white hover:bg-brand-dark"

// Secondary Button
className="border-brand-green text-brand-green hover:bg-brand-light"
```

### Links
```tsx
// Primary Link
className="text-brand-green hover:text-brand-dark"

// Light Background Link
className="text-text-secondary hover:text-brand-green"

// Dark Background Link
className="text-gray-400 hover:text-brand-green"
```

### Sections
```tsx
// Light Background Section
className="bg-brand-light py-24"

// Brown Background Section
className="bg-brand-brown py-24"

// Dark Background Section
className="bg-black py-16"
```

### Cards
```tsx
// Basic Card
className="bg-white p-4 rounded-lg shadow-sm"

// Interactive Card
className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
```

## Layout

### Container
```tsx
className="container max-w-4xl mx-auto"
```

### Grid Layouts
```tsx
// Two Column Grid
className="grid md:grid-cols-2 gap-12"

// Three Column Grid
className="grid md:grid-cols-3 gap-12"

// Four Column Grid
className="grid md:grid-cols-4 gap-12"
```

## Spacing

- Use `space-y-{size}` for vertical spacing between elements
- Standard section padding: `py-24` for main sections, `py-16` for smaller sections
- Container padding: `px-4` on mobile, container class handles larger screens

## Best Practices

1. Always use semantic color names from the design system
2. Maintain consistent spacing throughout the application
3. Use responsive design patterns with mobile-first approach
4. Ensure sufficient color contrast for accessibility
5. Use hover states for interactive elements
6. Maintain consistent typography scale 