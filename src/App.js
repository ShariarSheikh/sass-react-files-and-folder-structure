function App() {
  return (
    <div className="container">
      <h1 className="one w-10 h-10 mx-auto">hello world</h1>
      <h1 className="two">hello world</h1>
      <h1 className="three">hello world</h1>

      <div class="columns-3 mb-10">
        <img
          class="w-full aspect-square"
          src="https://images.pexels.com/photos/12406354/pexels-photo-12406354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        />
        <img
          class="w-full aspect-square"
          src="https://images.pexels.com/photos/12684656/pexels-photo-12684656.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        />
        <img
          class="w-full aspect-square"
          src="https://images.pexels.com/photos/12616272/pexels-photo-12616272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <img
          class="w-full aspect-square"
          src="https://images.pexels.com/photos/12684656/pexels-photo-12684656.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        />
        <img
          class="w-full aspect-square"
          src="https://images.pexels.com/photos/12616272/pexels-photo-12616272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
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
