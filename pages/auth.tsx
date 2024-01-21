import Input from '@/components/input';
import axios from 'axios';
import { useCallback, useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  // useCallback is optimisation hook which will return the fn
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
    /* add dependency array here so that it can render the application only once, if you don't add dependency array it on every other states changes it will render the application. if you keep states in the dependency array, if the state change in the array then only it will render the application. */
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      });
      setEmail('');
      setName('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password]);

  return (
    <>
      <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-cover">
        <div className='bg-black w-full h-full lg:bg-opacity-50'>
          <nav className='px-12 py-5'>
            <img
              src='/images/logo.png'
              alt='logo'
              className='h-12'
            />
            <div className='flex justify-center'>
              <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                <h2 className='text-white text-4xl mb-8 font-semibold'>
                  {variant === 'login' ? 'Sign In' : 'Register'}
                </h2>
                <div className='flex flex-col gap-4'>
                  {variant === 'register' && (
                    <Input
                      id='name'
                      type='text'
                      label='Username'
                      value={name}
                      onChange={(e: any) => setName(e.target.value)}
                    />
                  )}
                  <Input
                    id='email'
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                    label='Email address or phone number'
                    type='email'
                  />
                  <Input
                    id='password'
                    onChange={(e: any) => setPassword(e.target.value)}
                    value={password}
                    label='password'
                    type='password'
                  />
                </div>
                <button
                  onClick={register}
                  className='bg-red-600 py-3 mt-10 text-white rounded-md w-full hover:bg-red-700 transition'>
                  {variant === 'login' ? 'Login' : 'Register'}
                </button>
                <p className='text-neutral-500 mt-12'>
                  {variant === 'login'
                    ? 'First time using Netflix'
                    : 'Already have an account? '}
                  <span
                    className='text-white ml-1 hover:underline cursor-pointer'
                    onClick={toggleVariant}>
                    {variant === 'login' ? 'Create an account' : 'Login'}
                  </span>
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Auth;
