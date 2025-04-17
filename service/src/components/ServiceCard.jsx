function ServiceCard({ name, description }) {
    return (
      <>
        <div style={{ border: "solid 20px white", borderRadius: "10px" }}></div>
        <h1>ServiceCard</h1>
        <h2>Title: {name}</h2>
        <p>Description: {description}</p>
      </>
    );
  }
  
  export default ServiceCard; 