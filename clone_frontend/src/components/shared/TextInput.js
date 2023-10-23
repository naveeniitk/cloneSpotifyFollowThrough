const TextInput = ({label, placeholder}) => {
    return (
        <div className="textInputDiv w-full flex flex-col space-y-2">
            <label for={label}
                className="font-semibold w-full ">
                {label}
            </label>
            <input 
                type="text" 
                placeholder={placeholder} 
                className="p-2 border border-gray-5 00 border-solid rounded placeholder-gray-400"
                id={label}
            />
        </div>
    )
}

export default TextInput