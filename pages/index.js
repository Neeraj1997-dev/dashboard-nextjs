import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Link href="/auth/login" className="text-blue-500">
        Login
      </Link>
      <Link href="/auth/register" className="text-blue-500">
        Register
      </Link>
      <Link href="/dashboard" className="text-blue-500">
        Dashboard
      </Link>
    </div>
  );
}
