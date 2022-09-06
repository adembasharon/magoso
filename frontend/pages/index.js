
import Head from 'next/head'

import Donation from './api/components/Donation'
import Contact from './api/components/Contact/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
       {/* <Donation/>   */}
        <Contact/> 
      </div>


</div>
)
  }

