import DashBoard from ".";


function Möbius() {

       

    const name = "Möbius"

    const true_name = "Johann Wilhelm Möbius"

    const views_on_science = "Er sieht es als Aufgabe der Wissenschaft, abzuwegen ob eine Entdeckung statt finden darf oder nicht."

    const political_believes = "Keine Vorliebe zwischen UDSSR und USA. Will beiden nicht seine Formel anvertrauen."

    return (
        <DashBoard  name={name} true_name={true_name} views_on_science={views_on_science} political_believes={political_believes}/>
    );


}

export default Möbius;