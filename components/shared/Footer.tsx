import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo2.svg"
            alt="logo"
            width={70}
            height={15}
          />
        </Link>

        <p>2024 EventPlanner360. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer