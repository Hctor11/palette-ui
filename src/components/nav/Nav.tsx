import Image from "next/image";
import Link from "next/link";
import img from "../../app/icon.svg";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-icon">
        <Link href="/">
          <Image src={img} width={30} height={23} alt="icon image" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
