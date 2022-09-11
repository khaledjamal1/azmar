import '../styles/globals.css';
import Layout from '../components/Layout';
import { createTheme, NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    type: 'light', // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '#5CB8E4',
        primaryLightHover: '#5CB8E4',
        primaryLightActive: '#5CB8E4',
        primaryLightContrast: '#533483',
        primary: '#5CB8E4',
        primaryBorder: '#16213E',
        primaryBorderHover: '#0F3460',
        primarySolidHover: '#16213E',
        primarySolidContrast: '#533483',
        primaryShadow: '#16213E',
        background: '#181818',
        text: '#F2F2F2',
        gradient:
          'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#fca311',

        // you can also create your own color
        myColor: '#0F3460',

        // ...  more colors
      },
      space: {},
      fonts: {},
    },
  });

  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
