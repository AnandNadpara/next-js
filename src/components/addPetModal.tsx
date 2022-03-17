import * as React from 'react'
import { Button } from "baseui/button"
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal'
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { Select, Value } from "baseui/select";

interface fff {
  onData: (data: {petName: String, petType: Value}) => void
}

export default function AddPetModal({onData}: fff){
  const [isOpen, setIsOpen] = React.useState(false)
  const [petType, setPetType] = React.useState<Value>([])
  const [petName, setPetName] = React.useState('Pet')
  
  function close(){
    setIsOpen(false)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    onData({
      petName,
      petType,
    })
    close();
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Create New Pet</Button>
      <Modal 
        onClose={close} 
        isOpen={isOpen}
        // overrides={{
        //   Dialog: {
        //     style: {
        //       top: '0',
        //       backgroundColor: 'red',
        //       display: 'flex',
        //       flexDirection: 'column',
        //     },
        //   },
        // }}
      >
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl
              label={() => "Pet Name"}
              >
              <Input
                value={petName}
                onChange={e => setPetName(e.currentTarget.value)}
                placeholder="Enter Pet Name"
                clearable
                autoFocus
                required
                />   
            </FormControl>
            
            <FormControl
              label={() => "Pet Type"}
              >
              <Select
                options={[
                  { petType: "DOG", id: "DOG" },
                  { petType: "CAT", id: "CAT" }
                ]}
                labelKey="id"
                valueKey="petType"
                onChange={({value}) => setPetType(value)}
                value={petType}
                required
                />
            </FormControl>

            <ModalFooter>
              <ModalButton kind="tertiary" onClick={close}>
                Cancel
              </ModalButton>
              <Button type="submit">Okay</Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </>
  )
}