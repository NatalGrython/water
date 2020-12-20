import Modal from 'react-modal'
import ModalView from './ModalView'

const RegistrModal = props => {
    const customStyles = {
        content: {
            width: '650px',
            height: '547px',
        },
    }

    return (
        <>
            <Modal isOpen={props.open} ariaHideApp={false} style={customStyles}>
                <ModalView setOpen={props.setOpen} />
            </Modal>
        </>
    )
}

export default RegistrModal
