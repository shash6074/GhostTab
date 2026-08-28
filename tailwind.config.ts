import type { Config } from 'tailwindcss';
export default { darkMode: 'class', content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#151718', mist: '#f6f7f8', lime: '#d3f36b' }, boxShadow: { soft: '0 10px 35px rgba(14,20,24,.08)' } } }, plugins: [] } satisfies Config;
