import Buttons from "./Buttons"
const ButtonList = () => {  
    const lists=["All","Cricket","Football","Gaming","Coding","Cooking","Movies","Music","News","Lives","Comedy","Watch"]
  return (
    <div className="flex">
        {
            lists.map((b,i)=>(
                <Buttons prop={b} key={i}/>
            ))
        }
    </div>
  )
}

export default ButtonList