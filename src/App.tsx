import UserList from './components/UserList'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <UserList/>
   </QueryClientProvider>
  )
}

export default App
