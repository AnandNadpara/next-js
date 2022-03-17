import * as React from 'react';
import Link from 'next/link'
import {
  Card,
  StyledBody,
  StyledAction,
  StyledThumbnail,
} from 'baseui/card';
import {Button} from 'baseui/button';

interface PetCardProp {
  pet: {
    id: Number,
    name: String,
    type: "DOG" | "CAT",
  }
  deletePet: (id: Number) => void
}

export default function PetCard({pet, deletePet}: PetCardProp) {
  return (
    <Card
      overrides={{Root: {style: {width: '328px'}}}}
      title={pet.name}
    >
      <StyledThumbnail
        src={pet.type === "DOG" ? 'https://placedog.net/640/480?random' : 'http://placekitten.com/200/300'}
      />
      <StyledBody>
        <Link href={`/pets/${pet.id}`}><a>{pet.name}</a></Link>
        <p>ID: {pet.id}</p>
        <p>Type: {pet.type}</p>
        <p>
        {
          pet.type === "DOG" ? "There are so many benefits of having a dog, of course there's the obvious benefits like extra exercise and a best friend for life, but they can also improve your physical and mental health!" 
          : "Owning a cat can be an extremely rewarding relationship. A cat has the ability to both calm your nervous system and provide an immediate outlet for fun and play. They are also very affectionate with their owners and people they trust."
        }
        </p>
      </StyledBody>
      <StyledAction>
        <Button 
          overrides={{BaseButton: {style: {width: '100%'}}}}
          onClick={()=>deletePet(pet.id)}>
          Delete
        </Button>
      </StyledAction>
    </Card>
  );
}