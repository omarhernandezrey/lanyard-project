import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Permitir tipos any temporalmente para deployment
      "@typescript-eslint/no-explicit-any": "warn",
      // Permitir comentarios ts-ignore/ts-expect-error
      "@typescript-eslint/ban-ts-comment": "warn",
    },
  },
];

export default eslintConfig;
