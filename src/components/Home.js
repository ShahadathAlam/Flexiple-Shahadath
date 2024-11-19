import Button from "./Button";

function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <header>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Hire .NET Developers: Affordable, Dedicated .NET Experts in 72 hours
          </h2>
        </header>
        <p className="text-lg text-gray-600 mb-4">
          Hire .NET developers to enhance your project's efficiency and
          productivity. Build dynamic web applications using ASP.NET, C#, Entity
          Framework, and MVC.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Access 100+ expert NET developers, engineers, and architects from
          Flexiple, handpicked through a 5-hour evaluation process.
        </p>

        <div>
          <Button variant="primary">Hire Dream Developers</Button>
        </div>
      </section>
    </main>
  );
}

export default Home;
