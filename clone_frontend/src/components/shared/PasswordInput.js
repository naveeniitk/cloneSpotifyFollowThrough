const PasswordInput = ({label, placeholder}) => {
    return (
        <div className="passwordInputDiv w-full flex flex-col space-y-2">
            <label for={label}
                className="font-semibold w-full ">
                {label}
            </label>
            <input 
                type="password" 
                placeholder={placeholder} 
                className="p-2 border border-gray-600 border-solid rounded placeholder-gray-500"
                id={label}
            />
        </div>
    )
}

export default PasswordInput