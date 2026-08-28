import './globals.css'; import { Toaster } from 'sonner';
export const metadata = { title:'GhostTab', description:'Save it. Remember why. Find it later.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" suppressHydrationWarning><body>{children}<Toaster richColors position="bottom-right" /></body></html>; }
