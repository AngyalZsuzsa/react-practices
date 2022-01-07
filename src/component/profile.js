

const profile = _ => {
    const names = ["Timi", "Peter", "Laszlo", "Gergo", "Richard"];

    const [timi, , , ,peter] = names;
    //csak sorrendben tudunk haladni, de teszoleges változó nevet tudunk neki adni
    
    return <div>
        <h2>{timi}</h2> 
        <h2>{peter}</h2> 
    </div>
    
}

export default profile





