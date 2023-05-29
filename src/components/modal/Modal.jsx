import reactDom from "react-dom"
import "./Modal.css"

const Modal = ({ open, children, onClose }) => {
    if (!open) return null

    return reactDom.createPortal(
        <>
            <div className="overlay" />
            <div className="modalContainer">
                {children}
                <div className="btns">
                    <button onClick={onClose} className="submitBtn">Kiértékel</button>
                    <button onClick={onClose} className="closeBtn">Mégse</button>
                </div>
            </div>
        </>,
        document.getElementById("portal")
    )
}

export default Modal