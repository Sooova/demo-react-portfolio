import React from "react";
import "./styles.css";

function Contact() {
    return (
        <div class="container">
        <form action="action_page.php">
      
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            
          <label for="lname">E-mail</label>
          <input type="text" id="lname" name="lastname" placeholder="Your E-mail..."/>
          
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
      
          <button>Submit</button>
      
        </form>
      </div> 
    );
}

export default Contact;
