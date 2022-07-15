function App() {
  return (
    <div className="container">
      <h1 className="one w-10 h-10 mx-auto">hello world</h1>
      <h1 className="two">hello world</h1>
      <h1 className="three">hello world</h1>

      <iframe
        className="aspect-video w-full"
        src="https://www.youtube.com/embed/lRaL-8qZ0mM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
