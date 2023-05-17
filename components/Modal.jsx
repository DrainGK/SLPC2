import React from 'react';

const Modal = ({open, onClose, children}) => {

    if(!open) return null;

    return (
        <div onClick={onClose} className={`z-[1000] fixed inset-0 flex justify-center items-center
        transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div
            onClick={(e) => e.stopPropagation() } 
            className={`
            bg-primary-black overflow-hidden rounded-xl shadow p-6 transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <button onClick={onClose} className='absolute top-2 right-2 p-1 rounded-lg
                text-white hover:text-gray-200 text-xl'>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;