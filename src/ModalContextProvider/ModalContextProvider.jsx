import React, { createContext, useState } from 'react';
import App from '../App';

export const ModalContext = createContext(null)

const ModalContextProvider = ({children}) => {
    const [modalDetail, setModalDetail] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(true);
  return (
    <ModalContext.Provider value={{modalDetail, setModalDetail, isLoading, setIsLoading, isError, setIsError}}>{children}</ModalContext.Provider>
  )
}

export default ModalContextProvider