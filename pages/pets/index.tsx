import * as React from 'react'
import { Value } from 'baseui/select';
import AddPetModal from '../../src/components/addPetModal';
import PetCard from '../../src/components/petCard'
import {ListItem} from 'baseui/list';
import {styled} from 'baseui'
import { Button } from 'baseui/button';

interface petsProps {
  pets: [{
    id: Number,
    name: String,
    type: "DOG" | "CAT",
  }]
}

const Div = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  height: '100%',
  overflow: 'scroll'
})


export default function Pets({ pets }: petsProps){
  const [rPets, setRPets] = React.useState(()=>pets)

  async function fetchPets(){
    const res = await fetch('http://localhost:3000/api/pets')
    const {data} = await res.json()
    console.log(data)
    setRPets(data)
    
  }

  async function onData(data: {petName: String, petType: Value}) {
    const res = await fetch('http://localhost:3000/api/pets', {
      method: 'POST',
      body: JSON.stringify({id: Date.now, name: data.petName, type: data.petType[0].id}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const response = await res.json()
    console.log(response)
  }

  async function deletePet(id: Number){
    const res = await fetch(`http://localhost:3000/api/pets/${id}`, {
      method: 'DELETE'
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <Div>
      <AddPetModal onData={onData}/>
      <Button onClick={()=>fetchPets()}>Bhai Refresh</Button>
      <h1>List of all pets</h1>
      {
        rPets.map((pet) => {
          const key = pet.name + String(pet.id);
          return (
          <ListItem key={key}>
            <PetCard pet={pet} deletePet={deletePet} />
          </ListItem>
          )
          })
      }
    </Div>
  )
}

export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/pets')
  const { data } = await res.json()
  return {
    props: {
      pets: data
    }
  }
}