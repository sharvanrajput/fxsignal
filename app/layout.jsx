// app/layout.jsx

import './globals.css';
// import { Provider } from 'react-redux';
// import store from './store';
import Navbar from '@/components/navbar/page';
import Footer from '@/components/Footer/page';
import StoreProvider from './storeProvider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
