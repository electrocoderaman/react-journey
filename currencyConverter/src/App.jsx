import { useState } from 'react'
import { Input } from './component'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [conAmount, setConAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setTo(from)
    setFrom(to)
    setConAmount(amount)
    setAmount(conAmount)
  }

  const convert = () => {
    setConAmount(amount * currencyInfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?_gl=1*cu62ni*_ga*ODc2ODIwMTQuMTc1NDU3NjM2NA..*_ga_8JE65Q40S6*czE3NjcxNjQxMDMkbzckZzEkdDE3NjcxNjQxNzgkajYwJGwwJGgw')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(Currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={conAmount}
                currencyOptions={options}
                onCurrencyChange={(Currency)=> setTo(Currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default App
