import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogIn } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <main className='w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center'>
            <h1 className='text-5xl font-bold'>Chat with any PDF</h1>
            <UserButton afterSignOutUrl='/' />
          </div>

          <div className='flex mt-2'>
            {isAuth && <Button>Go to Chats</Button>}
          </div>

          <p className='max-w-xl mt-1 text-lg text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            optio officia obcaecati quo quibusdam, aliquam fuga alba cos diyt.
          </p>

          <div className='w-full mt-4 flex flex-col items-center'>
            {isAuth ? (
              <h1>file upload</h1>
            ) : (
              <Link href={"sign-in"}>
                <Button>
                  Login to get Started!
                  <LogIn className='w-4 h-4 ml-2' />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
