function User() {
    let scores = [500, 400, 300,"Deepak"];
    let [x, y, z,a] = scores;


console.log(x,y,z); //500 400 300
    return (
        <div>
            <h1>I am Mr. Sahu.</h1>
            <p>I am a web developer.</p>
            <p>I love writing.</p>
            {x}
            <br/>
            {y}
            <br/>
            {z}
            <br/>
            {a}
        </div>
    )
}

export default User
