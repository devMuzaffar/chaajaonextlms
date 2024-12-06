const Title = ({children}) => {
  return (
    <div className="flex gap-1 items-stretch">
          <div className="w-1 bg-primary" />
          <h2 className="font-bold text-xl">{children}</h2>
    </div>
  )
}

export default Title