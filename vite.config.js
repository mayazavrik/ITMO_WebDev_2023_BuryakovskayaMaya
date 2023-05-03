import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetWebFonts from "@unocss/preset-web-fonts";

export default {
  plugins: [
    UnoCSS({
      include: ['./index.html', 'main.js', './src/**/**.js'],
      presets: [presetUno(), presetIcons(), presetWebFonts({
        provider: 'google', // default provider
        fonts: {
          // these will extend the default theme
          // sans: 'Noto Sans',
          sans: {
            name: 'Noto Sans',
            weights: ['400', '700'],
            italic: true,
          },
        },
      })],
      rules: [],
    }),
  ],
};