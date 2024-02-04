import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/">
            <Image
                src="/logo.png"
                alt="Logo"
                width={84}
                height={84}
                className="object-contain dark:hidden"
            />
            <Image
                src="/white-eflv.png"
                alt="Logo"
                width={84}
                height={84}
                className="object-contain hidden dark:block"
            />
        </Link>
    );
}