import './Color.css';

const Color = props => {
    const alertColor = (a, b = "nothing") => {
        return alert(`This box is ${color}, it has the name ${text}, and the text is ${textColor}. This event was a ${a.type} event. Oh and don't forget the text that the user entered which is "${b}".`)
    }

    const logColor = (a, b = "nothing") => {
        return console.log(`This box is ${color}, it has the name ${text}, and the text is ${textColor}. This event was a ${a.type} event. Oh and don't forget the text that the user entered which is "${b}".`)
    }

    const {
        text,
        color,
        textColor
    } = props;
    return (<div className="box" onClick={(event) => alertColor(event, "what I entered")} onMouseEnter={(event) => logColor(event, "some text")} style={{
        backgroundColor: color,
        color: textColor
    }}>
        {text}
    </div>)
}

/*
If you run this example in your create-react-app,
you will receive a warning that there is no "key" provided for the list items.
*/

export default Color;