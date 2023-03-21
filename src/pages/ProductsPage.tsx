import React from 'react'
import { useProducts } from '../Hooks/products'
import { Product } from '../components/Product'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { useContext } from 'react'
import { IProduct } from '../models'
import { ModalContext } from '../context/ModalContext'

export function ProductPage() {
    
const { products, error, Loading, addProduct } = useProducts()
const { modal, open, close} = useContext(ModalContext)
const createHandler = (Product: IProduct) => {
  close()
  addProduct(Product)
}

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { Loading && <Loader/> }
      { error && <ErrorMessage error={error} /> }
      { products.map( product => <Product product={product} key={product.id}/> ) }

      {modal && < Modal title='Create new product' onClose={close}>
        <CreateProduct onCreate={createHandler} />
      </ Modal>}
      <button 
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
        >+</button>
    </div>
  )
}