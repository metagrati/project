import { createAppKit } from '@reown/appkit';
import { mainnet, polygon } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

const projectId = '9ba0d4ac5db061b3efb559c91eabfef5';

export const networks = [mainnet, polygon];

const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
});

const metadata = {
  name: 'ProfitFlip',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit',
  icons: ['https://assets.reown.com/reown-profile-pic.png']
};

export const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, polygon],
  metadata,
  projectId,
  features: {
    analytics: true
  }
});