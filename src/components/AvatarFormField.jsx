import { useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar";
import { useEffect } from "react";
import "../styles/AvatarFormField.css";

export function AvatarFormField(props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        props.onChange(index);
    }, [index, props]);

    function handlePreviousClick() {
        if (index <= 0) {
            setIndex(avatarImages.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function handleNextClick() {
        if (index >= avatarImages.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <FormField>
        <div className="avatar-button">
          <button className="button-nice" type="button" onClick={handlePreviousClick} style={{ margin: '15px' }}>Previous</button>
          <img className="avatar" src={avatarImages[index]} alt={index} width={100} />
          <button className="button-nice" type="button" onClick={handleNextClick} style={{ margin: '15px' }}>Next</button>
        </div>
      </FormField>
    )
}
