import React, { useState } from 'react'
import Modal from './modal'
import Login from './Login'
import './style.css'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

export default function Apps() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        <a onClick={() => setIsOpen(true)} className="mod" style={{fontWeight: '500'}}>Log In</a>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        </Modal>
      </div>
    </>
  )
}