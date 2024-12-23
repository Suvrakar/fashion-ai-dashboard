import { Fragment, useEffect } from "react";
import Head from "next/head";

import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@mantine/core/styles.css";
import "./global.css";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/authContext";
import DefaultLayout from "../components/DefaultLayout";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // Only create a theme for MUI
  const muiTheme = createTheme();

  // Directly pass Mantine theme config to MantineProvider
  const mantineTheme = {
    /** Your Mantine theme overrides here */
  };

  return (
    <Fragment>
      <Head>
        <title>Debashis Kar Suvra's Team's Project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={muiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MantineProvider>
          <SessionProvider session={pageProps.session}>
            <AuthProvider>
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </AuthProvider>
          </SessionProvider>
        </MantineProvider>
      </ThemeProvider>
    </Fragment>
  );
}
