import '../styles/globals.css';
import Layout from '../components/Layout';
import { createTheme, NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    type: 'light', // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '#34a853',
        primaryLightHover: '#F8F8F8',
        primaryLightActive: '#F8F8F8',
        primaryLightContrast: '#F8F8F8',
        primary: '#34a853',
        primaryBorder: '#F8F8F8',
        primaryBorderHover: '#F8F8F8',
        primarySolidHover: '#F8F8F8',
        primarySolidContrast: '#F8F8F8',
        primaryShadow: '#34a853',
        background: '#06070d ',
        text: '#F8F8F8',
        gradient:
          'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#fca311',

        // you can also create your own color
        myColor: '#34a853',

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
