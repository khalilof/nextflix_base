

export default function Home() {
  return (
      <main className="home-page">
          <div className="container">
              <form>
                  <input type="text" aria-label="Search Movie" placeholder="Search Movie..." name="search"/>
                  <button>Search</button>
              </form>
          </div>

          <div className="results-container">
              <h2 className="nothing-to-show">Nothing to show</h2>
          </div>
      </main>
  );
}
