import React, { useEffect } from 'react';

const Modal = ({modalContent}) => {
  useEffect(()=>console.log(modalContent),[]);  
  return (
    <div className='modal fade' id='staticBackdrop' aria-hidden='false'>
        <div className='modal-dialog modal-xl mt-5' style={{ maxWidth: '700px' }}>
          <div className='modal-content'>
            <div>
              <button
                type='button'
                className='btn-close position-absolute top-0 end-0 me-4 mt-4'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body d-flex my-5'>
              <div className='col-md-5 mt-3 ms-4 water-modal-image-background'>
                <img
                  src={modalContent.imageUrl}
                  className='col-md-10 ms-4 mt-5'
                  alt={modalContent.productName}
                  height={180}
                />
              </div>
              <div className='col-md-6 mt-3 ms-3'>
                <h5 className='fw-bold'>{modalContent.name}</h5>
                <p className='fw-bold text-muted'>{modalContent.description}</p>
                <div className='mt-4 mb-1'>
                  <span className='card-text fw-bold'>&#8377;{modalContent.maxRetailPrice}</span>
                  {/* <s className='card-text ms-3 text-muted'>${modalContent.maxRetailPrice}</s> */}
                </div>
                <p><b>Discount : </b>{modalContent.discountApplicable}%</p>
                <p className='text-muted'><b>Quantity : </b>{modalContent.quantity}</p>
                <p><b>Added : </b>{modalContent.added}</p>
                <p><b>Product Location : </b>{modalContent.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal