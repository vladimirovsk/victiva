import Coaching from "./(site)/coaching/page";
import Connect from "./(site)/connect/page";
import Curs from "./(site)/curs/page";
import Free from "./(site)/free/free";
import HomePage from "./(site)/home/page";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
     <div>
        <Analytics />
        <HomePage/>
        <Free />
        <Curs/>
        <Coaching/>
        <Connect/>
     </div>
    )
}
