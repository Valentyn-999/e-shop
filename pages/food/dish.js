export default function Dish({data}) {
    debugger
    return <div>
        {JSON.stringify(data.dishes.map(el =>
            el.name
        ))}
    </div>
}


export async function getStaticProps() {
    debugger
    const res = await fetch(`http://old.dietagram.ru/?name=potato&lang=en`)
    const data = await res.json()
    debugger

    return {
        props: {data},
    }
}

 Dish

