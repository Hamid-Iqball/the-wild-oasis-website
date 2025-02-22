import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signoutAction } from '../_lib/actions';

function SignOutButton() {
  //Server actions can be called from the client components as well and still it will only execute on the server
  return (
    <form action={signoutAction}>

    <button className='py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full'>
      <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600' />
      <span>Sign out</span>
    </button>
    </form>
  );
}

export default SignOutButton;
