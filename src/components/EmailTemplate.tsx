export const ContactEmail = (name: string, email: string, message: string) => {
  return (
    <div style={{fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9fb", padding: "20px"}}>
      <div
        style={{
          maxWidth: "580px",
          margin: "auto",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h1>Une nouvelle demande de contact est arrivé depuis votre portfolio</h1>
        <p>Nom : {name}</p>
        <p>Email : {email}</p>
        <p>Message :
          <div style={{border: "1px solid black", borderRadius: "10px", padding: "5px"}}>
            {message}
          </div>
        </p>
      </div>
    </div>
  )
}