const Card = ({ title, capacity, location, lat, lon }) => {
  return (
    <div className="bg-zinc-800 p-2 rounded-lg">
      <div className="text-xl">
        <img
          className="w-80 h-48"
          alt="img"
          src="https://images.unsplash.com/photo-1708955743956-da1bb7f6fe6a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div>
          <p>{title}</p>
          <p>location: {location}</p>
          <p>
            lat:{lat}, lon:{lon}
          </p>
          <p>Capacity : {capacity}</p>
          <p>Temperature: 50 C</p>
          <p>Humidity : 100 Hm</p>
          <p>Suitable for Wheat</p>
          <p>Status: Empty</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
