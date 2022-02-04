export default function Posts({data}) {
  console.log(data)
  return <h1>Luander</h1>
}

export async function getServerSideProps(context) {
  const data = [
    {name: 'luander'},
    {name: 'emilli' }
  ]
  return {
    
    props: {
      data
    }
  }
}