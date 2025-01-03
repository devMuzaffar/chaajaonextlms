import Avatar from '@mui/material/Avatar';

const dummyImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo53Qh7BhRVObNnC1UZ338uxfM7HCuduwZhAIgLGc-Xs5xLW7Gyq5Tgy-0L0toJsWhv_pysg&s";

const UserCard = ({img, name, email}) => {
  return (
    <div className='h-full flex items-center gap-3'>
        <Avatar src={dummyImg} sx={{width: "36px", height: "36px"}}/>
        <div className='flex flex-col w-full gap-1'>
            <h2 className='text-sm font-medium'>{name}</h2>
            <p className='text-xs text-gray-500'>{email}</p>
        </div>
    </div>
  )
}

export default UserCard