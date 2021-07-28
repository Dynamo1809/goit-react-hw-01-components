// Components //
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


// JSON //
import user from './json/user.json';
import statisticalData from './json/statistical-data';
import userFriends from './json/friends.json';
import transactionData from './json/transactions.json';

// Styles //
import './App.css';

// Packages //
// var randomColor = require('randomcolor'); 
// var colors = randomColor({
//   count: 10,
//    hue: 'random'
// }); 


function App() {
  return (
    <div className="App">
      <section className="App-header">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title = "Upload Stats" stats={statisticalData}/>
      <FriendList friends={userFriends} />
      <TransactionHistory items={transactionData} />
      </section>
    </div>
  );
}

export default App;
