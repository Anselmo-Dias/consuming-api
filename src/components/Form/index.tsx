import { Button, FormContainer, Input } from './styles'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { useContext } from 'react'
import { EcommerceContext } from '../../context/EcommerceContext'

const formValidationSchema = z.object({
  id: z
    .string()
    .nonempty('Esse campo é obrigatorio')
    .min(1, 'Deve contér pelo menos 1 caracter')
    .refine((value) => /^\d+$/.test(value), {
      message: 'Somente números são permitidos neste campo',
    }),
  title: z.string().nonempty('Esse campo é obrigatorio').toLowerCase(),
  description: z.string().nonempty('Esse campo é obrigatorio').toLowerCase(),
  price: z
    .string()
    .min(1, 'Deve contér pelo menos 1 caracter')
    .max(3, 'Deve conter no maximo 3 caracteres')
    .refine((value) => /^\d+$/.test(value), {
      message: 'Somente números são permitidos neste campo',
    }),
})

type FormData = z.infer<typeof formValidationSchema>

export default function Form() {
  const { handleFetchApi } = useContext(EcommerceContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
  })

  class Product {
    title: string
    description: string
    price: string

    constructor(title: string, description: string, price: string) {
      this.title = title
      this.description = description
      this.price = price
    }
  }

  async function handleSubmitForm(dataForm: FormData) {
    const inforProduct = new Product(
      dataForm.title,
      dataForm.description,
      dataForm.price,
    )

    const response = await api.put(`/products/${dataForm.id}`, inforProduct)
    const data = await response.data

    handleFetchApi()
    reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <h5>Editar produto</h5>
      <Input type="text" placeholder="Identificador 'id'" {...register('id')} />
      <span>{errors.id?.message}</span>
      <Input type="text" placeholder="Titulo" {...register('title')} />
      <span>{errors.title?.message}</span>
      <Input type="text" placeholder="Descrição" {...register('description')} />
      <span>{errors.description?.message}</span>
      <Input type="text" placeholder="Preço" {...register('price')} />
      <span>{errors.price?.message}</span>
      <Button type="submit">Mudar</Button>
    </FormContainer>
  )
}
