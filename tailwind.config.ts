import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                // Main Brand Colors
                // Use these as your primary colors for main UI elements
                brand: {
                    green: "#2A5F3C", // Primary action color, headers, buttons
                    brown: "#E0CBB6", // Background, secondary elements
                    dark: "#1A3B25", // Darker variant of green for hover states
                    light: "#EBD9C7", // Lighter variant of brown for hover states
                },

                // Semantic Colors
                // Use these for specific UI purposes
                border: "#2A5F3C", // Green borders for contrast
                input: "#2A5F3C",
                ring: "#2A5F3C",
                background: "#E0CBB6", // Main background
                foreground: "#2A5F3C", // Main text color

                // Component Colors
                // Use these for specific component states
                primary: {
                    DEFAULT: "#2A5F3C",
                    foreground: "#FFFFFF",
                    hover: "#1A3B25",
                },
                secondary: {
                    DEFAULT: "#E0CBB6",
                    foreground: "#2A5F3C",
                    hover: "#EBD9C7",
                },
                accent: {
                    DEFAULT: "#2A5F3C",
                    foreground: "#FFFFFF",
                    hover: "#1A3B25",
                },

                // Text Colors
                // Use these for different text hierarchies
                text: {
                    primary: "#2A5F3C", // Main text
                    secondary: "#1A3B25", // Secondary text (better contrast than gray)
                    muted: "#4D4D4D", // Muted text (dark gray for better contrast)
                    white: "#FFFFFF", // For dark backgrounds
                },

                // Status Colors
                // Use these for feedback and status indicators
                status: {
                    success: "#2A5F3C", // Using brand green for success
                    error: "#CC3333", // High contrast red
                    warning: "#B45309", // Dark amber for better contrast
                    info: "#1A3B25", // Dark green for information
                },

                // Keep existing system colors but mark as legacy
                destructive: {
                    DEFAULT: "#CC3333", // Updated for better contrast
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "#E0CBB6",
                    foreground: "#1A3B25", // Darker green for better contrast
                },
                popover: {
                    DEFAULT: "#E0CBB6",
                    foreground: "#2A5F3C",
                },
                card: {
                    DEFAULT: "#E0CBB6",
                    foreground: "#2A5F3C",
                },

                // Existing bootstrap colors remain unchanged
                blue: "#0d6efd",
                indigo: "#6610f2",
                purple: "#6f42c1",
                pink: "#d63384",
                red: "#dc3545",
                orange: "#fd7e14",
                yellow: "#ffc107",
                green: "#198754",
                teal: "#20c997",
                cyan: "#0dcaf0",
                gray: {
                    DEFAULT: "#6c757d",
                    100: "#f8f9fa",
                    200: "#e9ecef",
                    300: "#dee2e6",
                    400: "#ced4da",
                    500: "#adb5bd",
                    600: "#6c757d",
                    700: "#495057",
                    800: "#343a40",
                    900: "#212529",
                },
                bs: {
                    primary: "#0d6efd",
                    secondary: "#6c757d",
                    success: "#198754",
                    info: "#0dcaf0",
                    warning: "#ffc107",
                    danger: "#dc3545",
                    light: "#f8f9fa",
                    dark: "#212529",
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            backgroundColor: {
                'natural': '#F5F2ED',
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
