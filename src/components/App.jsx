import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { Container } from './App.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  //return <Container>React homework template</Container>;
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};

