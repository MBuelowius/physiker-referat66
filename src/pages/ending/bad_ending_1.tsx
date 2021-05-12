import Ending from ".";

function BadEnding1() {

    const title = "Schlechtes Ende I"

    const content = "Nachdem die geheime Formel in das amerikanische Pentagon gelangen ist, drohen diese dem Offizier Stab der UDSSR. Dieser reagiert mit dem Einsatz der im kalten Krieg hergestellten Atomwaffen, woraufhin die USA ebenfalls ihre eigenen Atomwaffen nutzt. Das Leben auf der Erde ist in den ersten Momenten nach dem Atomkrieg nur noch in Bunkern möglich, allerdings gehen auch diesen die Vorräte aus."

    return (
        <Ending title={title} content={content} />
    );


}

export default BadEnding1;