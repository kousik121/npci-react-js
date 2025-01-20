function SixComp(props) {
    return <>
        <button value="I am button" onClick={(e) => console.log(e.target.value)}>Click</button>
        <br />
        <input type="text" onChange={(e) => console.log(e.target.value)} />
        <br />
        <input type="radio" name="r1" value="Male" onChange={(e) => console.log(e.target.value)} />Male
        <input type="radio" name="r1" value="Female" onChange={(e) => console.log(e.target.value)} />Female
        <br />
        <select onChange={(e) => console.log(e.target.value)}>
            <option>English</option>
            <option>Hindi</option>
            <option>Sanskrit</option>
        </select>
        <br />
    </>
}

export default SixComp;