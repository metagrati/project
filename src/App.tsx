import React, { useState } from 'react';
import { Timer, ArrowUp, ArrowDown, Trophy, History, HelpCircle, Settings } from 'lucide-react';

function PredictionCard({ type, expired, roundNumber, payout, price, lockedPrice, prizePool }: {
  type: 'expired' | 'live' | 'next' | 'later';
  expired?: boolean;
  roundNumber?: string;
  payout?: string;
  price?: string;
  lockedPrice?: string;
  prizePool?: string;
}) {
  const isLive = type === 'live';
  const isNext = type === 'next';
  const isLater = type === 'later';

  return (
    <div className={`relative rounded-2xl p-3 pt-6 ${isLive ? 'bg-gray-900 border-2 border-blue-500' : 'bg-gray-800'} w-72`}>
      <div className="absolute -top-3 left-4 bg-gray-700 px-4 py-1 rounded-full text-sm font-medium">
        <span className="whitespace-nowrap">
          {type === 'expired' && 'Expired'}
          {isLive && 'LIVE'}
          {isNext && 'Next'}
          {isLater && 'Later'}
          {roundNumber && ` #${roundNumber}`}
        </span>
      </div>
      
      <div className="flex flex-col gap-3">
        <div className="bg-emerald-500/20 rounded-t-xl p-2 text-center">
          <div className="text-emerald-500 font-bold">UP</div>
          {payout && <div className="text-sm text-emerald-400">{payout}x Payout</div>}
        </div>
        
        {!isLater && (
          <div className="space-y-1.5 px-3">
            <div className="text-gray-400 text-sm">{isLive ? 'LAST PRICE' : 'CLOSED PRICE'}</div>
            <div className="text-xl font-bold">${price}</div>
            {lockedPrice && (
              <>
                <div className="text-gray-400 text-sm">Locked Price:</div>
                <div className="text-lg">${lockedPrice}</div>
              </>
            )}
            {prizePool && (
              <>
                <div className="text-gray-400 text-sm">Prize Pool:</div>
                <div className="text-lg">{prizePool} MATIC</div>
              </>
            )}
          </div>
        )}

        {isNext && (
          <div className="space-y-2 px-3">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl">
              Enter UP
            </button>
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl">
              Enter DOWN
            </button>
          </div>
        )}

        {isLater && (
          <div className="text-center py-6">
            <div className="text-gray-400">Entry starts</div>
            <div className="text-xl font-bold">~03:00</div>
          </div>
        )}

        <div className="bg-pink-500/20 rounded-b-xl p-2 text-center">
          <div className="text-pink-500 font-bold">DOWN</div>
          {payout && <div className="text-sm text-pink-400">{payout}x Payout</div>}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.png" alt="ProfitFlip" className="h-12" />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-xl flex items-center space-x-2">
                <img src="https://cryptologos.cc/logos/polygon-matic-logo.svg" className="h-5 w-5" alt="MATIC" />
                <span>Polygon</span>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" className="h-8 w-8" alt="BTC" />
            <div>
              <h1 className="text-2xl font-bold text-white">BTC/USD</h1>
              <p className="text-gray-400">$43,245.32</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Timer className="text-gray-400" />
            <span className="text-xl font-mono text-white">03:00</span>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Trophy className="text-gray-400" />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <History className="text-gray-400" />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <HelpCircle className="text-gray-400" />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Settings className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Prediction Cards */}
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <PredictionCard 
            type="expired"
            roundNumber="354919"
            payout="1.51x"
            price="43,245.84"
            lockedPrice="43,193.33"
            prizePool="52.599"
          />
          <PredictionCard 
            type="live"
            roundNumber="354920"
            payout="2.11x"
            price="43,295.76"
            lockedPrice="43,245.84"
            prizePool="47.482"
          />
          <PredictionCard 
            type="next"
            roundNumber="354921"
            payout="0x"
          />
          <PredictionCard 
            type="later"
            roundNumber="354922"
          />
        </div>

        {/* Chart Area */}
        <div className="mt-8 bg-gray-800 rounded-xl p-4 h-96">
          <div className="flex space-x-4 mb-4">
            <button className="text-white bg-blue-500 px-4 py-2 rounded-lg">TradingView Chart</button>
            <button className="text-gray-400 hover:text-white px-4 py-2 rounded-lg">Chainlink Chart</button>
          </div>
          <div className="h-full bg-gray-900 rounded-lg"></div>
        </div>
      </main>
    </div>
  );
}

export default App;