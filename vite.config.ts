import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        main: path.resolve(__dirname, "lib/main.js"),
      },
      name: "example-umd",
      fileName: "example-umd",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library.
      // Commented out until React imported as UMD
      // external: ["react", 'react-dom'],
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      //   globals: {
      //     react: "React",
      //     'react-dom': "ReactDOM",
      //   },
      // },
    },
  },
});
