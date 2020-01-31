import Portfolio from './components/Portfolio'
import StockTrader from './components/StockTrader'
// import Navbar from './components/Navbar'
import Stocks from './components/Stocks'


 export const routes = [
  { path: '', component: StockTrader },
  { path: '/portfolio', component: Portfolio}, 
  { path: '/stocks', component: Stocks}
]

