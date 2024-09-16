import { Button } from '@mui/material'

export const Todo = ({ name }: { name: string }) => {
  return (
    <Button style={{ justifyContent: 'space-between' }} fullWidth={true}>{name}</Button>
  )
}
