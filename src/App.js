function App() {
  return (
    <div className="container">
      <h1 className="one w-10 h-10 mx-auto">hello world</h1>
      <h1 className="two">hello world</h1>
      <h1 className="three">hello world</h1>

      <iframe
        className="aspect-video w-full"
        src="https://www.youtube.com/embed/jfMHA8SqUL4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
