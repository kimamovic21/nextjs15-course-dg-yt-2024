/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs";
import path from 'path';

const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },

  async redirects() {
    const isProd = process.env.NODE_ENV === "production";

    if (isProd) {
      return [
        {
          source: "/sentry-example-page",
          destination: "/",
          permanent: false,
        },
        {
          source: "/page",
          destination: "/",
          permanent: false,
        },
      ];
    }

    return [];
  },

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

const sentryWebpackPluginOptions = {
  org: "davegray",
  project: "repairshop",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false,
  hideSourceMaps: true,
  disableLogger: true,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);