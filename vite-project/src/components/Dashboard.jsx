import { useState, useEffect } from 'react';
import Modal from './Modal';  // Adjust the import path according to your project structure
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const classes = [
    { id: 1, name: 'UI/UX Designing', time: '2024-07-12T14:00:00', staff: 'Suriya R', status: 'live' },
    { id: 2, name: 'Graphic Designing', time: '2024-07-12T18:00:00', staff: 'Priya Sweety', status: 'upcoming' },
    { id: 3, name: 'Design Hierarchy', time: '2024-07-21T10:00:00', staff: 'Leslie Alexander', status: 'upcoming' },
    { id: 4, name: 'Basics of Frontend', time: '2024-07-21T16:00:00', staff: 'Courtney Henry', status: 'upcoming' },
    { id: 5, name: 'Graphic Designing', time: '2024-07-22T10:00:00', staff: 'Jerome Bell', status: 'booked' },
    { id: 6, name: 'Graphic Designing', time: '2024-07-23T11:00:00', staff: 'Arlene McCoy', status: 'upcoming' },
    { id: 7, name: 'Advanced CSS', time: '2024-07-25T14:00:00', staff: 'Jacob Jones', status: 'upcoming' },
    { id: 8, name: 'React Basics', time: '2024-07-26T10:00:00', staff: 'Annette Black', status: 'upcoming' },
    { id: 9, name: 'Node.js Introduction', time: '2024-07-27T15:00:00', staff: 'Albert Flores', status: 'upcoming' },
    { id: 10, name: 'Full-Stack Development', time: '2024-07-28T11:00:00', staff: 'Cameron Williamson', status: 'upcoming' },
    { id: 11, name: 'Database Management', time: '2024-07-29T16:00:00', staff: 'Eleanor Pena', status: 'upcoming' },
    { id: 12, name: 'Python for Beginners', time: '2024-07-30T09:00:00', staff: 'Savannah Nguyen', status: 'upcoming' },
    { id: 13, name: 'Machine Learning', time: '2024-07-01T14:00:00', staff: 'Darlene Robertson', status: 'upcoming' },
    { id: 14, name: 'Data Structures', time: '2024-07-02T11:00:00', staff: 'Kathryn Murphy', status: 'upcoming' },
    { id: 15, name: 'Cybersecurity Basics', time: '2024-07-03T17:00:00', staff: 'Dianne Russell', status: 'upcoming' },
];

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showBookedOnly, setShowBookedOnly] = useState(false);
    const [now, setNow] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(dayjs());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleBookNowClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmModal = () => {
        setIsModalOpen(false);
    };

    const handleCheckboxChange = () => {
        setShowBookedOnly(!showBookedOnly);
    };

    const getButtonText = (classItem) => {
        const classTime = dayjs(classItem.time);
        const diff = classTime.diff(now);
        const duration = dayjs.duration(diff);

        if (classItem.status === 'live') {
            return 'Join now';
        } else if (classItem.status === 'booked') {
            if (classTime.isSame(now, 'day')) {
                return `${duration.hours()}h ${duration.minutes()}m left`;
            } else {
                return `${duration.days()}d ${duration.hours()}h left`;
            }
        } else {
            return 'Book now';
        }
    };

    const isButtonDisabled = (classItem) => classItem.status === 'booked';

    const filteredClasses = showBookedOnly ? classes.filter(classItem => classItem.status === 'booked') : classes;

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Upcoming classes</h2>
            <div className="flex justify-between mb-2 text-gray-600">
                <div>For next 7 days</div>
                <div className="flex items-center">
                    <span>Booked only</span>
                    <input
                        type="checkbox"
                        className="ml-2 h-4 w-4 text-gray-600"
                        checked={showBookedOnly}
                        onChange={handleCheckboxChange}
                    />
                </div>
            </div>
            <div className="border-t border-gray-200">
                <div className="w-2/12 text-sm font-bold"></div>
                <div className="flex justify-around py-2 border-b border-gray-200 bg-custom-color ">
                    <div className="w-4/12 text-sm font-bold text-text-color-head">
                        Class name
                    </div>
                    <div className="w-3/12 text-sm font-bold text-text-color-head ">
                        Staff name
                    </div>
                    <div className="w-2/12 text-sm font-bold text-text-color-head ml-2">
                        Actions
                    </div>
                </div>
                <div className="w-2/12 text-sm font-bold"></div>
                {filteredClasses.map((classItem, index) => (
                    <div key={classItem.id} className="flex items-center py-4 border-b border-gray-200">
                        <div className="flex items-center w-1/12">
                            <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                        <div className="flex flex-col items-start w-4/12">
                            <div className={`text-sm font-bold`}>{classItem.name}</div>
                            <div className={`text-sm ${classItem.status === 'live' ? 'text-red-500' : 'text-gray-500'}`}>
                                {classItem.status === 'live' ? 'Live' : dayjs(classItem.time).format('DD MMM hh:mm A')}
                            </div>
                        </div>
                        <div className="flex items-center w-3/12">
                            <img src={`https://via.placeholder.com/40`} alt={classItem.staff} className="rounded-full h-10 w-10" />
                            <div className="ml-2">
                                <div className="text-sm font-bold">{classItem.staff}</div>
                                <div className="text-sm text-gray-500">Additional details</div>
                            </div>
                        </div>
                        <div className="flex items-center w-2/12"></div>
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
