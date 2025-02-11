const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Hey, I'm Safwaan!</h1>
        <p className="description">
          I'm a software engineer, open-source creator, and developer. <br />
          I've been making websites since [year] and writing on this blog for the past [time period].
        </p>
        <p>I enjoy [your interests here], and spending time with my friends and family.</p>
      </section>

      <section>
        <h2>Articles</h2>
        <p>Guides, references, and tutorials.</p>
        <div className="grid">
          <div className="card">
            <h3>Article Title</h3>
            <span className="date">February 2024</span>
            <p>Brief description of the article goes here.</p>
          </div>
          {/* Add more article cards */}
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <p>Open-source projects I've worked on over the years.</p>
        <div className="grid">
          <div className="card">
            <h3>Project Name</h3>
            <p>Project description goes here.</p>
            <div className="links">
              <a href="#">Article</a>
              <a href="#">Demo</a>
            </div>
          </div>
          {/* Add more project cards */}
        </div>
      </section>
    </div>
  );
};

export default Home;
