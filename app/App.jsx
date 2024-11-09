import {
    Sidebar
} from './components';

const App = () => {
  return (
    <div className='app border-2 border-black flex'>
        <Sidebar />
        <div className='w-full h-full border-2 border-red-500'>Dummy Block</div>
    </div>
  )
}

export default App