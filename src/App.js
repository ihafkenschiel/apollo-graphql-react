import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Courses from './Courses';

const apolloClient = new ApolloClient({
  uri: ''
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <Courses />
      </div>
    </ApolloProvider>
  );
}

export default App;
