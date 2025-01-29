function MyList (){
    const subjects = ["History", "Geography", "English", "Biology", "Philosophy"];

    return (
        <ul>
            {subjects.map((item, index) => (

            
             <li key={index}>{item}</li>

            ))}
        </ul>

    );
}

export default MyList;