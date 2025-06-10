import { MoralisNextApi } from '@moralisweb3/next';

export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY || 'YOUR_API_KEY',
  authentication: {
    domain: 'gebrid.com',
    uri: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    timeout: 60,
  },
});
