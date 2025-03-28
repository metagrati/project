import React, { useState, useEffect } from 'react';
import { Timer, Trophy, History, HelpCircle, Settings, Wallet } from 'lucide-react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import { AdvancedChart } from 'react-tradingview-embed';

type RoundData = {
  type: 'expired' | 'live' | 'next' | 'later';
  roundNumber: string;
  payout?: string;
  price?: string;
  lockedPrice?: string;
  prizePool?: string;
};

function PredictionCard({ data, isFlipped, onFlip }: { 
  data: RoundData;
  isFlipped: boolean;
  onFlip: () => void;
}) {
  const { type, roundNumber, payout, price, lockedPrice, prizePool } = data;
  const isLive = type === 'live';
  const isNext = type === 'next';
  const isLater = type === 'later';

  const [{ transform, opacity }, api] = useSpring(() => ({
    transform: `perspective(1000px) rotateY(${isFlipped ? 180 : 0}deg)`,
    opacity: 1,
    config: { mass: 1, tension: 200, friction: 20 }
  }));

  const bind = useDrag(({ movement: [x], direction: [xDir], tap }) => {
    if (tap) {
      onFlip();
      return;
    }
    
    if (Math.abs(x) > 50) {
      onFlip();
      api.start({ transform: `perspective(1000px) rotateY(${isFlipped ? 0 : 180}deg)` });
    }
  });

  useEffect(() => {
    api.start({ transform: `perspective(1000px) rotateY(${isFlipped ? 180 : 0}deg)` });
  }, [isFlipped]);

  return (
    <div className="card-container preserve-3d touch-none" {...bind()}>
      <animated.div
        style={{ transform, opacity }}
        className="backface-hidden w-full h-full"
      >
        <div className={`relative rounded-2xl p-6 pt-10 ${isLive ? 'bg-dark-lighter border-2 border-primary' : 'bg-dark-light'} h-full`}>
          <div className="absolute -top-4 left-6 bg-dark px-6 py-2 rounded-full text-sm font-medium text-accent">
            <span className="whitespace-nowrap">
              {type === 'expired' && 'Expired'}
              {isLive && 'LIVE'}
              {isNext && 'Next'}
              {isLater && 'Later'}
              {roundNumber && ` #${roundNumber}`}
            </span>
          </div>
          
          <div className="flex flex-col gap-6 h-full">
            <div className="bg-secondary-light rounded-xl p-4 text-center">
              <div className="text-secondary text-xl font-bold">UP</div>
              {payout && <div className="text-secondary/80 text-lg">{payout}x Payout</div>}
            </div>
            
            {!isLater && (
              <div className="space-y-4 px-4 flex-grow">
                <div className="text-accent/80 text-lg">{isLive ? 'LAST PRICE' : 'CLOSED PRICE'}</div>
                <div className="text-3xl font-bold text-white">${price}</div>
                {lockedPrice && (
                  <>
                    <div className="text-accent/80 text-lg">Locked Price:</div>
                    <div className="text-2xl text-white">${lockedPrice}</div>
                  </>
                )}
                {prizePool && (
                  <>
                    <div className="text-accent/80 text-lg">Prize Pool:</div>
                    <div className="text-2xl text-white">{prizePool} POL</div>
                  </>
                )}
              </div>
            )}

            {isNext && (
              <div className="space-y-4 px-4">
                <button className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 rounded-xl text-lg font-semibold transition-colors">
                  Enter UP
                </button>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl text-lg font-semibold transition-colors">
                  Enter DOWN
                </button>
              </div>
            )}

            {isLater && (
              <div className="text-center py-18 flex-grow">
                <div className="text-accent/80 text-xl">Entry starts</div>
                <div className="text-4xl font-bold text-white mt-4">~03:00</div>
              </div>
            )}

            <div className="bg-primary-light rounded-xl p-4 text-center mt-auto">
              <div className="text-primary text-xl font-bold">DOWN</div>
              {payout && <div className="text-primary/80 text-lg">{payout}x Payout</div>}
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeChart, setActiveChart] = useState<'tradingview' | 'chainlink'>('tradingview');
  const [chartError, setChartError] = useState(false);

  const rounds: RoundData[] = [
    {
      type: 'expired',
      roundNumber: '354919',
      payout: '1.51x',
      price: '43,245.84',
      lockedPrice: '43,193.33',
      prizePool: '52.599'
    },
    {
      type: 'live',
      roundNumber: '354920',
      payout: '2.11x',
      price: '43,295.76',
      lockedPrice: '43,245.84',
      prizePool: '47.482'
    },
    {
      type: 'next',
      roundNumber: '354921',
      payout: '0x'
    },
    {
      type: 'later',
      roundNumber: '354922'
    }
  ];

  const navigateRound = (direction: 'prev' | 'next') => {
    setIsFlipped(false);
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'next' && currentIndex < rounds.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-dark-light">
      <header className="bg-dark-lighter border-b border-dark sticky top-0 z-50">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.svg" alt="ProfitFlip" className="h-8 sm:h-12" />
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="bg-dark text-white px-3 py-2 rounded-xl flex items-center space-x-2">
                <Wallet className="h-5 w-5 text-accent" />
                <span className="hidden sm:inline">POL</span>
              </button>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl font-medium transition-colors">
                Connect
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center space-x-4 bg-dark-lighter p-4 rounded-xl mb-6">
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" className="h-10 w-10" alt="BTC" />
            <div>
              <h1 className="text-2xl font-bold text-white">BTC/USD</h1>
              <p className="text-accent/80 text-lg">$43,245.32</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-dark-lighter p-4 rounded-xl mb-6">
            <div className="flex items-center space-x-3">
              <Timer className="text-secondary h-6 w-6" />
              <span className="text-xl font-mono text-white">03:00</span>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 bg-dark hover:bg-dark-light rounded-lg transition-colors">
                <Trophy className="text-accent h-6 w-6" />
              </button>
              <button className="p-2 bg-dark hover:bg-dark-light rounded-lg transition-colors">
                <History className="text-accent h-6 w-6" />
              </button>
              <button className="p-2 bg-dark hover:bg-dark-light rounded-lg transition-colors">
                <HelpCircle className="text-accent h-6 w-6" />
              </button>
              <button className="p-2 bg-dark hover:bg-dark-light rounded-lg transition-colors">
                <Settings className="text-accent h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-6">
            {rounds.map((round, index) => (
              <div key={round.roundNumber} className="relative">
                <PredictionCard
                  data={round}
                  isFlipped={currentIndex === index && isFlipped}
                  onFlip={() => {
                    setCurrentIndex(index);
                    setIsFlipped(!isFlipped);
                  }}
                />
              </div>
            ))}
          </div>

          <div className="bg-dark-light rounded-xl p-5 space-y-5">
            <div className="flex space-x-3">
              <button 
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeChart === 'tradingview' 
                    ? 'bg-primary text-white' 
                    : 'text-accent hover:text-white'
                }`}
                onClick={() => setActiveChart('tradingview')}
              >
                TradingView
              </button>
              <button 
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeChart === 'chainlink' 
                    ? 'bg-primary text-white' 
                    : 'text-accent hover:text-white'
                }`}
                onClick={() => setActiveChart('chainlink')}
              >
                Chainlink
              </button>
            </div>

            <div className="chart-container bg-dark rounded-lg">
              {activeChart === 'tradingview' ? (
                <AdvancedChart
                  widgetProps={{
                    interval: "1",
                    symbol: "BINANCE:BTCUSDT",
                    theme: "dark",
                    style: "1",
                    locale: "en",
                    enable_publishing: false,
                    allow_symbol_change: true,
                    container_id: "tradingview_chart"
                  }}
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-accent">Chainlink Price Feed Coming Soon</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;