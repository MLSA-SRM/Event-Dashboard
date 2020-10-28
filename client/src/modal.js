import React from 'react'
import ReactDom from 'react-dom'
import Login from './Login'
import "./style.css"

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .4)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className="ms">
      <button onClick={onClose} className="close"><i class="fas fa-times"></i></button>
        <Login/>
      </div>
    </>,
    document.getElementById('portal')
  )
}