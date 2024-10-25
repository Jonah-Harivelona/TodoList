export function Input({value, placeholder, onChange})  {
    return <div>
       
        <input
                type="text" 
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="form-control w-50 my-3"
            />
      
    </div>
}