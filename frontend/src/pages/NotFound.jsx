export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold text-neutral-200">404</h1>
      <p className="mt-4 text-xl font-medium text-neutral-700">Page not found</p>
      <a href="/" className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700">
        Go to homepage
      </a>
    </div>
  );
}