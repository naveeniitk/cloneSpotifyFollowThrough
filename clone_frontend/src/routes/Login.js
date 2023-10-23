import { Icon } from '@iconify/react';

const LoginComponent = () => {
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='logo p-7 border-b border-solid border-grey-100 w-full flex justify-center'>
                <Icon icon="logos:spotify" width={200} />
            </div>
            <div className='inputRegion'>
                {/* here we will get two inputs email and password and also signup button */}
                
            </div>
        </div>
    );
}



export default LoginComponent
