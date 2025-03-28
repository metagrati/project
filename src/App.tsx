import React from 'react';
import { Wallet, Network } from 'lucide-react';
import { modal } from './lib/web3';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">ProfitFlip</h1>
        
        <div className="space-y-4">
          <button
            onClick={() => modal.open()}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Wallet className="w-5 h-5" />
            Connect Wallet
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Connect your wallet to start using ProfitFlip
        </p>
      </div>
    </div>
  );
}

export default App;