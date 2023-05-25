import { avatarImages } from "../library/avatar";
import "../styles/Message.css";

export function Message(props) {
    return (
        <div className="message">
    
          <div className="message-avatarName">
            <img
              src={avatarImages[props.avatarIndex]}
              alt={props.author}
              width={100}
              height={100}
            />
            <div className="message-author">{props.author}</div>
          </div>
          
          
            <div className="message-style">
                <div className="message-text">{props.text}</div>
                <div className="message-time">{props.time}</div>
            </div>
    
        </div>

      );
}