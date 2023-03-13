import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Detail from "./Detail";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://pbs.twimg.com/profile_images/1523987597751726081/XuQeo7gC_400x400.jpg" />
      <Detail detail="shreeyasatam@email.com" />
      <Card 
        name={contacts[0].name}
        image={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        image={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        image={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
      
    </div>
  );
}

export default App;
