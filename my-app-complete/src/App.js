import './App.css';
import PostList from './components/PostList';
// import GrandParent from './components/GrandParent';
// import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Nabendu">
        <GrandParent />
      </UserProvider> */}
      <PostList />
    </div>
  );
}

export default App;
