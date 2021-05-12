import DashBoard from ".";

function Einstein() {

    const name = "Einstein"

    const true_name = "Joseph Eisler"

    const views_on_science = "Die Verantwortung liegt bei der Politik. Erselbst ist nicht frei zu Entscheiden."

    const political_believes = "Soviet Agent"

    return (
        <DashBoard  name={name} true_name={true_name} views_on_science={views_on_science} political_believes={political_believes}/>
    );


}

export default Einstein;