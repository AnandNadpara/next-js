import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { styled } from 'baseui'

const Div = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  height: '100%',
  overflow: 'scroll'
})


export default function Pet({pet}: {pet: {id: Number, name: String, type: "DOG" | "CAT"}}){
  console.log(pet)
  return (
    <Div>
      <h1>Hello World</h1>
      <h3>{pet.name}</h3>
      <h3>{pet.id}</h3>
      <h3>{pet.type}</h3>
      <Image 
        src={pet.type === "DOG" ? 'https://placedog.net/640/480?random' : 'http://placekitten.com/200/300'}
        alt="Nothing here!"
        height={pet.type === "DOG" ? 480 : 300}
        width={pet.type === "DOG" ? 640 : 200}
      />
    </Div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {params} = context;
  console.log(params)
  const res = await fetch(`http://localhost:3000/api/pets/${params?.id}`)
  const { data } = await res.json()
  return {
    props: {
      pet: data
    }
  }
}