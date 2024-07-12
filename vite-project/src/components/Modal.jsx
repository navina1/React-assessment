

function Modal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
                <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
                <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</p>
                <div className="flex justify-end">
                    <button onClick={onClose} className="py-2 px-4 rounded bg-gray-300 text-gray-700 mr-2">Close</button>
                    <button onClick={onConfirm} className="py-2 px-4 rounded bg-blue-500 text-white">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
