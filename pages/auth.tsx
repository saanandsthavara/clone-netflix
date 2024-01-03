import Input from '@/components/input';
import { useCallback, useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

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
                <button></button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Auth;
