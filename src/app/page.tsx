export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-base-200">
      <section className="text-center bg-neutral p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to the App</h1>
        <p className="text-lg mb-6">
          Get started by navigating to your dashboard.
        </p>
        <a role="button" href="/dashboard" className="d-btn d-btn-primary">
          Go to Dashboard
        </a>
      </section>
    </main>
  );
}
