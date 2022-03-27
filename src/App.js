import "./App.css";

function App() {
  return (
    <>
      <br />
      <div className="container is-fluid">
        <nav className="navbar" role="navigation">
          <div className="navbar-brand">
            <figure className="image is-64x64">
              <img src={require("./peep-24.png")} alt="logo" />
            </figure>
          </div>
        </nav>
      </div>
      <div className="container is-fluid ">
        <br />
        <br />
        <h1 className="is-size-1 has-text-weight-bold is-family-monospace">
          Hey Peeps!
        </h1>
        <p className="is-size-5 is-family-monospace">
          {" "}
          It's not a confession if no one reads it. It's just an unshared
          secret. So go ahead and confess whatever you want without anyone ever
          knowing who you are. NOT EVEN US!{" "}
        </p>

        <br />
        <br />

        <div className="box">
          <form name="confession" method="POST" netlify>
            <label>
              <textarea
                className="textarea is-family-monospace"
                name="text"
                id="text"
                cols="30"
                type="text"
                rows="5"
                placeholder="Write here..."
              ></textarea>
            </label>
            <br />
            <button
              type="submit"
              className="button is-link has-text-weight-bold is-family-monospace "
            >
              Confess!!!
            </button>
          </form>
        </div>
        <br />
        <br />

        <p className="is-family-monospace">
          <strong>NOTE:</strong> We believe in a zone of privacy. We do not
          collect any type of information related to the identity of the person
          writing here. <strong>WE DON'T KNOW WHO YOU ARE!</strong>
        </p>
      </div>
    </>
  );
}

export default App;
