import { AdminPais } from "."
import { useContact } from "../../api"
import contact from "../contact"


const KontaktAdmin = () => {
    return(
        <div style= {{padding: 30}}>
            <h1>Matkad admin</h1>
            <AdminPais />
        </div>
    )   
}

export default KontaktAdmin