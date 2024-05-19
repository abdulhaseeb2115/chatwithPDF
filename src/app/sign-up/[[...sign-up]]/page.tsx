import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <SignUp path='/sign-up' />
    </div>
  );
}
