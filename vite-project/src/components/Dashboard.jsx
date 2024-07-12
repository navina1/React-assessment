import { useState } from 'react';
import Modal from './Modal';  // Adjust the import path according to your project structure

const classes = [
    { id: 1, name: 'UI/UX Designing', time: 'Live (0:54)', staff: 'Suriya R', status: 'live', buttonText: 'Join now' },
    { id: 2, name: 'Graphic Designing', time: 'Today 6pm', staff: 'Priya Sweety', status: 'upcoming', countdown: '2:40:34', buttonText: 'Join now' },
    { id: 3, name: 'Design Hierarchy', time: '21st June 10am', staff: 'Leslie Alexander', status: 'upcoming', buttonText: 'Book now' },
    { id: 4, name: 'Basics of Frontend', time: '21st June 4pm', staff: 'Courtney Henry', status: 'upcoming', countdown: '3 days', buttonText: 'Book now' },
    { id: 5, name: 'Graphic Designing', time: '22nd June 10am', staff: 'Jerome Bell', status: 'booked', buttonText: 'Book now' },
    { id: 6, name: 'Graphic Designing', time: '23rd June 11am', staff: 'Arlene McCoy', status: 'upcoming', buttonText: 'Book now' },
];

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBookNowClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmModal = () => {
        // Handle the confirm action here
        setIsModalOpen(false);
    };

    const getButtonText = (classItem) => {
        if (classItem.status === 'live') {
            return 'Join now';
        } else if (classItem.time.includes('Today')) {
            return `${classItem.countdown}`;
        } else {
            return 'Book now';
        }
    };

    const isButtonDisabled = (classItem) => classItem.status === 'booked';

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Upcoming classes</h2>
            <div className="flex justify-between mb-2 text-gray-600">
                <div>For next 7 days</div>
                <div>Booked only</div>
            </div>
            <div className="border-t border-gray-200">
                {/* Table Header */}
                <div className="w-2/12 text-sm font-bold"></div>
                <div className="flex items-center py-2 border-b border-gray-200 bg-gray-100">
                    <div className="w-4/12 text-sm font-bold">Class name</div>
                    <div className="w-3/12 text-sm font-bold">Staff name</div>
                    <div className="w-2/12 text-sm font-bold">Actions</div>
                    <div className="w-2/12 text-sm font-bold"></div>
                </div>
                {/* Table Rows */}
                {classes.map((classItem, index) => (
                    <div key={classItem.id} className="flex items-center py-4 border-b border-gray-200">
                        <div className="flex items-center w-1/12">
                            <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                        <div className="flex items-center w-4/12">
                            <div className={`text-sm font-bold`}>{classItem.name}</div>
                            <div className={`text-sm ${classItem.status === 'live' ? 'text-red-500' : 'text-gray-500'}`}>{classItem.time}</div>
                        </div>
                        <div className="flex items-center w-3/12">
                            <img src={`https://via.placeholder.com/40`} alt={classItem.staff} className="rounded-full h-10 w-10" />
                            <div className="ml-2">
                                <div className="text-sm font-bold">{classItem.staff}</div>
                                <div className="text-sm text-gray-500">Additional details</div>
                            </div>
                        </div>
                        <div className="flex items-center w-2/12">
                            
                        </div>
                        <div className="w-2/12">
                            <button
                                className={`py-2 px-4 rounded ${isButtonDisabled(classItem) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
                                onClick={handleBookNowClick}
                                disabled={isButtonDisabled(classItem)}
                            >
                                {getButtonText(classItem)}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmModal} />
        </div>
    );
}

export default Dashboard;
