/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {};

export default withSentryConfig(nextConfig, {
    org: "Full Stack Apps",
    project: "repairshop",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: false, 
    hideSourceMaps: true,
    disableLogger: true,
});