import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
  onPageChange: (pag: number) => void
}

export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {

  if (isCurrent) {
    return (
      <Button fontSize="xs" size="sm" width="4" colorScheme="pink" disabled _disabled={{ bgColor: 'pink.500', cursor: 'default' }}>{number}</Button>
    )
  }

  return (
    <Button fontSize="xs" size="sm" width="4" bg="gray.700" _hover={{ bg: 'gray.500' }} onClick={() => onPageChange(number)}>{number}</Button>
  )
}