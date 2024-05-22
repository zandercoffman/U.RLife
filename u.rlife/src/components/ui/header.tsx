import Link from 'next/link'

export default function Header() {
    return <>
        <div className="top-0 grid lg:max-w-5xl lg:grid-cols-5 mb-6 ">
          <Link
            href="/"
            className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
            rel="noopener noreferrer"
          >
            <h3 className="mb-3 text-2xl font-semibold">
              u.rlife
            </h3>
          </Link>
          <Link
            className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
            rel="noopener noreferrer"
            href="/dashboard"
          >
            <h3 className="mb-3 text-sm ">
                Dashboard{" "}
              </h3>
          </Link>

          <Link
            href="/exercise"
            className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
            rel="noopener noreferrer"
          >
            <h3 className="mb-3 text-1xl ">
              Exercise{" "}
            </h3>
          </Link>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="mb-3 text-1xl ">
              Nutrition{" "}
            </h3>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="mb-3 text-1xl">
              Other{" "}
            </h3>
          </a>
        </div>
    </>
}