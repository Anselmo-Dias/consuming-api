import { api } from '@/lib/axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface ProductProps {
  id: number
  title: string
  description: string
  price: string
}

interface EcommerceProviderProps {
  children: ReactNode
}

interface EcommerceContextProps {
  products: ProductProps[]
  handleFetchEcommerceApi: () => Promise<void>
}

export const EcommerceContext = createContext({} as EcommerceContextProps)

export function EcommerceProvider({ children }: EcommerceProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([])

  console.log(products)

  async function handleFetchEcommerceApi() {
    try {
      const response = await api.get('/products')
      setProducts(response.data.rows)
    } catch (error) {
      console.error('Erro na Requisição:', error)
    }
  }

  useEffect(() => {
    handleFetchEcommerceApi()
  }, [])

  return (
    <EcommerceContext.Provider value={{ products, handleFetchEcommerceApi }}>
      {children}
    </EcommerceContext.Provider>
  )
}
