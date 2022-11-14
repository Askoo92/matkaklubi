import Navigatsioon from "../components/Navigatsioon";
import styles from "../styles/Home.module.css";

const Kontakt = ()=> {
    return (
        <div>
            <div style={{display: 'flex ', flexDirection: 'column'}}></div> 
            <h1>Võta meiega ühendus:</h1>
            <form>
               <input
                type='text'
                placeholder='Nimi:'
                onChange={(e) =>(e.target.value)}></input>
            </form>
            <br></br>
            <form>
               <input
                type='text'
                placeholder='E-mail:'
                onChange={(e) =>(e.target.value)}></input>
            </form>
            <br></br>
            <form>
               <input
                type='text'
                placeholder='Kommentaar:'
                onChange={(e) =>(e.target.value)}></input>
            </form>
            <br></br>
            <form>
                <button onClick={() => {}}>Saada</button> 
            </form>

            <h2>Soola 2, Tartu 
                <br></br>
            Tel: 1800 888 555</h2>
            </div>
         )
         }


export default () => {
    return (
        
        <div className={styles.pais}>
            <Navigatsioon/>    
            <Kontakt />            
       </div>
    )
}