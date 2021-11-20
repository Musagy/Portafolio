const Input = ({type, title}) =>{
  const inputClass = "py-2 px-3 rounded-lg dark:bg-blueGray-700"
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={title} className="dark:text-teal-500">{title}</label>
      {
        type
        ?
        <input type={type} name={title} className={inputClass} placeholder={`Escriba aqui su ${title.toLowerCase()}.`}/>
        :
        <textarea name={title} className={inputClass} placeholder={`Escriba aqui su ${title.toLowerCase()}.`}/>
      }
      
    </div>
  )
}
export default Input