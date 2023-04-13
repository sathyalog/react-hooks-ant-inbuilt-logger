import { useState, Suspense, useTransition } from 'react';
import { Layout } from 'antd';
import Dashboard from './Dashboard';
import Articles from './Articles';
const { Content } = Layout;
function App() {
  return (
    <div className="App">
      <Content style={{ padding: '10px 50px' }}>
        <Suspense fallback={<BigSpinner />}>
          <Router />
        </Suspense>
      </Content>
    </div>
  );
}

function Router() {
  const [page, setPage] = useState('/');
  const [isPending, startTransition] = useTransition();

  function navigate(url) {
    startTransition(() => {
      setPage(url);
    });
  }

  let content;
  if (page === '/') {
    content = (
      <Dashboard navigate={navigate} />
    );
  } else if (page === '/articles') {
    content = (
      <Articles navigate={navigate} />
    );
  }
  return (
    <div isPending={isPending}>
      {content}
    </div>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}

export default App;
