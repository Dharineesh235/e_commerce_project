import React, { useContext } from 'react';
import { ModalContext } from '../ModalContextProvider/ModalContextProvider';

const Card = ({product}) => {

  const {setModalDetail} = useContext(ModalContext);
  let truncate=(string, n)=>{
    return string?.length ? string.substr(0,n-1)+'...' : string;
}
  
  return (
        <div className='col-12 col-md-6 col-lg-4' key={product.id}>
          <div className='card p-3 shadow bg-body-white rounded mx-2'>
            <div className='px-5 pt-5 pb-2 card-image-background'>
              <img
                src={product.imageUrl}
                className='col-md-11 ms-2'
                alt={product.productName}
                height={170}
              />
            </div>
            <div className='card-body p-0 mt-4'>
              <div className='position-absolute top-0 end-0 rounded-circle px-1 py-1 me-2 mt-2 text-white jumbotron-style'>
                <div className='rounded-circle border border-1 border-white px-1'>
                  <p className='fw-bold text-center fs-4 gallon-packs px-2 py-1'>
                    {product.gallonPack}
                  </p>
                  <p className='fs-6 fw-medium mb-2 gallon-numbers px-2'>Pack</p>
                </div>
              </div>
              <h6 className='card-title fw-bold mb-0'>{product.name}</h6>
              <p className='card-text fw-bold text-muted'>{truncate(product?.description,70)}</p>
              <div className='my-4'>
                <span className='card-text fw-bold'>&#8377;{product.maxRetailPrice}</span>
                <button
                  type='button'
                  className='btn-link fw-medium border-0 bg-transparent float-end view-details-btn'
                  onClick={() => setModalDetail({ ...product })}
                  data-bs-toggle='modal'
                  data-bs-target='#staticBackdrop'
                  data-testid='modalBtn'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card