import Link from "next/link"

const Button = () => {
  return (
    <div className="button">
        <Link href="/generator" className="button-link">
            Start generating
        </Link>
    </div>
  )
}

export default Button