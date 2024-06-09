import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Tambahkan konfigurasi Next.js lainnya jika diperlukan
};

const sentryWebpackPluginOptions = {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
};

const sentryNextJsOptions = {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    // tunnelRoute: "/monitoring", // Uncomment jika ingin menggunakan
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions, sentryNextJsOptions);
