import {
    Sidebar
} from './components';

const App = () => {
  return (
    <div className='app flex'>
        <Sidebar />
        <div className='w-full border-2 border-red-500'>Dummy Block</div>
    </div>
  )
}

export default App