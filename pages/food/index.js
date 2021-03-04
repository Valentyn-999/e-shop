function Food({props}) {
    debugger
    return <div>{props}</div>
}

export default Food

// export async function getServerSideProps(context) {
//     const res = await fetch(`http://old.dietagram.ru/?name=potato&lang=en`)
//     const data = await res.json()
//     debugger
//
//     if (!data) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         }
//     }
//
//     return {
//         props: {data},
//     }
// }