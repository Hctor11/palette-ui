import './main.sass'

export default function Home() {

  const generateRandomColor = ():string => {
    let color:string = ""
    let i: number = 0
    for(let i = 0; i < 1; i++){
      const hue = ((Math.random() * 360) + (i * 360 / 1)) % 360;
      const saturation = 70 + Math.random() * 20;
      const lightness=  50 + Math.random() * 20;
      
      color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }

    return color
  }

  let paletteString = [" P","a","l","e","t","t","e"]

  return (
    <main>
      <h1 className='main-title'>Your interfaces deserves a better 
        {
          paletteString.map((item,i) => {
            return(
              <span 
                key={i} 
                style={{
                  color: generateRandomColor()
                }}
                className='colorful-text'
              >{item}</span>
            )
          })
        }
      </h1>
      
    </main>
  )
}
