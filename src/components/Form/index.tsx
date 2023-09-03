import { useState, useContext } from 'react'
import { Button, FormContainer, Input, RefreshButton } from './styles'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'

import { EcommerceContext } from '../../context/EcommerceContext'
import { RefreshCw } from 'lucide-react'

const formValidationSchema = z.object({
  id: z
    .string()
    .min(1, 'Deve contér pelo menos 1 caracter')
    .refine((value) => /^\d+$/.test(value), {
      message: 'Somente números são permitidos neste campo',
    }),
  title: z.string().nonempty('Esse campo é obrigatorio').toLowerCase(),
  description: z.string().nonempty('Esse campo é obrigatorio').toLowerCase(),
  price: z
    .string()
    // .min(1, 'Deve contér pelo menos 1 caracter')
    // .max(3, 'Deve conter no maximo 3 caracteres')

    .refine((value) => /^\d+$/.test(value), {
      message: 'Somente números são permitidos neste campo',
    }),
})

type FormData = z.infer<typeof formValidationSchema>

export default function Form() {
  const [differentButton, setDifferentButton] = useState(false)
  const { handleFetchEcommerceApi } = useContext(EcommerceContext)

  console.log(differentButton)

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
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

    if (differentButton) {
      const response = await api.post(`/products`, inforProduct)
      const data = await response.data
      console.log('entrei')

      console.log(data)

      handleFetchEcommerceApi()
      reset()
      return
    }

    const response = await api.put(`/products/${dataForm.id}`, inforProduct)
    const data = await response.data

    handleFetchEcommerceApi()
    reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <h5>{differentButton ? 'Adicionar produto' : 'Editar produto'}</h5>
      <Input
        type="text"
        placeholder={`${
          differentButton ? 'Não deixe esse campo vázio' : "Identificador 'id'"
        } `}
        {...register('id')}
      />
      {differentButton ? (
        <span style={{ color: '#000' }}>campo não utilizado no momento</span>
      ) : (
        <span>{errors.id?.message}</span>
      )}
      <Input type="text" placeholder="Titulo" {...register('title')} />
      <span>{errors.title?.message}</span>
      <Input type="text" placeholder="Descrição" {...register('description')} />
      <span>{errors.description?.message}</span>
      <Input type="text" placeholder="Preço" {...register('price')} />
      <span>{errors.price?.message}</span>
      <Button disabled={isSubmitting} type="submit">
        {differentButton ? 'Adicionar' : 'Mudar'}
      </Button>
      <RefreshButton
        type="button"
        onClick={() => setDifferentButton(!differentButton)}
      >
        <RefreshCw />
      </RefreshButton>
    </FormContainer>
  )
}
