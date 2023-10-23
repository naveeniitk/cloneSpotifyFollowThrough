import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput'

const LoginComponent = () => {
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='logo p-5 border-b border-solid border-grey-100 w-full flex justify-center'>
                <Icon icon="logos:spotify" width={150} />
            </div>
            <div className='inputRegion w-1/3 py-10 flex items-center justify-center flex-col '>
                {/* here we will get two inputs email and password and also s ignup button */}
                <div className='w-full font-bold mb-12'>
                    To continue, log in to spotify!
                </div>
                <TextInput 
                    label="Email address or Username"
                    placeholder="Email Id or Username"
                />
                <PasswordInput
                    label="Password"
                    placeholder="Passwrord"
                />
            </div>
        </div>
    );
}



export default LoginComponent
