import styles from '@/styles/Cards.module.css'
import Link from "next/link";

export async function getStaticProps() {

  const response = await fetch('https://api.godsunchained.com/v0/proto?perPage=2000');
  const data = await response.json();

  return {
    props: {cards: data.records}
}
}



export default function Cards({cards}) {
  return (
    <div>
        <h1>Cards Page</h1>
        {cards.map(card =>(
            <Link key={card.id} href="">
                <p>{card.id} | {card.name} </p>
            </Link>
        ))}
    </div>
  )
}
