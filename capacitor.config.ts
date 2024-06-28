import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'e-commerce',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.2.114:8100',
    cleartext: true
  }
};

export default config;
