import { EmotionCache } from '@/components/EmotionCache';
import { NProgress } from '@/components/NProgress';
import { ThemeRegistry } from '@/components/ThemeRegistry';
import { AuthProvider } from '@/contexts/Auth';
import { SettingsProvider } from '@/contexts/Settings';
import { ReduxProvider } from '@/store/provider';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GabGabGurus - find your language partner',
  description: 'A service for finding interlocutors in a foreign language',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
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
