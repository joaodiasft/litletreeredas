import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
        brand: {
          pink: "#E50D89",
          cta: "#C70A74",
          premium: "#0D0D12",
          muted: "#5F6470",
          surface: "#F7F4F8",
          roseSoft: "#FCE4F1",
          roseLight: "#F7B7DA",
          line: "#E6DFE7",
          icon: "#8B90A0",
        },
      },
      borderRadius: {
        "4xl": "1.75rem",
        "5xl": "2rem",
      },
      boxShadow: {
        card: "0 8px 32px rgba(13, 13, 18, 0.07)",
        "card-lg": "0 14px 44px rgba(13, 13, 18, 0.09)",
        nav: "0 -4px 24px rgba(13, 13, 18, 0.06)",
      },
      maxWidth: {
        linktree: "520px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #E50D89 0%, #FF4FB0 100%)",
        "gradient-dark-elegant":
          "linear-gradient(135deg, #C70A74 0%, #E50D89 55%, #FF6ABD 100%)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
