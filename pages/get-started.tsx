import Link from "next/link"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import { useState } from "react"

export default function GetStarted() {
  const [step, setStep] = useState(1)
  return (
    <Layout>
      <Hero>
        <h1 className="h1 mb-8">How it works</h1>
        {step === 1 && (
          <div className="p-8 bg-white rounded-xl w-full">
            <h2 className="h5 text-blurple-600 mb-4">
              1. Sign up for a server
            </h2>
            <p className="text-black text-b1">
              Servers are where your account lives, and usually have theme for
              interacting with like-minded people.
            </p>
            <div className="p-4 mt-4 rounded-lg bg-blurple-500/20 border border-blurple-500 border-dashed">
              <h3 className="text-blurple-600 font-bold text-b1">
                Does that mean I can only interact with people on my Mastodon
                server?
              </h3>
              <p className="text-black mt-2 text-b1">
                Nope! All servers interact with each other behind the scenes.
                The only noticeable difference is that people have different
                servers at the end of their account addresses.
              </p>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="px-4 py-2 opacity-0">Next</div>
              <p className="text-blurple-600 font-bold text-center">Step 1/2</p>
              <button
                className="text-white font-bold bg-blurple-600 px-4 py-2 rounded-md hover:opacity-75"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="p-8 bg-white rounded-xl w-full">
            <h2 className="h5 text-blurple-600 mb-4">Browse your feeds</h2>
            <p className="text-black text-b1">
              Once you have an account, you can browse multiple feeds.
            </p>
            <ul>
              <li className="text-black text-b1 mt-4">
                <span className="font-bold text-blurple-600">Home</span> is
                where you see posts from people you follow on any server, and
                their interactions with other people.
              </li>
              <li className="text-black text-b1 mt-4">
                <span className="font-bold text-blurple-600">Local</span> is
                where you see posts from people with accounts on the same server
                as you.
              </li>
              <li className="text-black text-b1 mt-4">
                <span className="font-bold text-blurple-600">Federated</span> is
                where you see posts from people with accounts on any server your
                server can see, i.e almost everyone!.
              </li>
            </ul>
            <p className="text-black text-b1 mt-4">
              You can also add other servers&apos; feeds if you&apos;d like!
            </p>
            <p className="text-black text-b1 mt-4">
              Basically - no matter what server you chooser,{" "}
              <span className="font-bold text-blurple-600">
                you wont be left out.
              </span>
            </p>
            <div className="mt-6 flex justify-between items-center">
              <button
                className="text-blurple-600 font-bold px-4 py-2 rounded-md hover:opacity-75 border border-blurple-600"
                onClick={() => setStep(1)}
              >
                Previous
              </button>
              <p className="text-blurple-600 font-bold text-center">Step 2/2</p>
              <Link href="/servers">
                <a className="text-white font-bold bg-blurple-600 px-4 py-2 rounded-md hover:opacity-75">
                  Next
                </a>
              </Link>
            </div>
          </div>
        )}
      </Hero>
      <div className="h-40" />
    </Layout>
  )
}
