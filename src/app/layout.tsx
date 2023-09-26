import './globals.css';
import { ReduxProvider } from '@/store/provider';
import { EmotionCache } from '@/components/EmotionCache';
import { ThemeRegistry } from '@/components/ThemeRegistry';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../contexts/Auth';
import { NProgress } from '@/components/NProgress';
import { Toaster } from 'react-hot-toast';
import { SettingsProvider } from '../contexts/Settings';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GabGabGurus - find your language partner',
  description: 'A service for finding interlocutors in a foreign language',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EmotionCache options={{ key: 'mui' }}>
          <ReduxProvider>
            <SettingsProvider>
              <AuthProvider>
                <ThemeRegistry>
                  <NProgress>{children}</NProgress>
                  <Toaster
                    toastOptions={{
                      className: '',
                      style: {
                        background: '#333',
                        color: '#fff',
                      },
                    }}
                  />
                </ThemeRegistry>
              </AuthProvider>
            </SettingsProvider>
          </ReduxProvider>
        </EmotionCache>
      </body>
    </html>
  );
}
