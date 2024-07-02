import React from 'react';
import './Notification.css';
import Header from '../../Interface/Dashboard/Header/Header'
const notifications = [
    {
        id: 1,
        title: 'New Message',
        content: 'You have received a new message from John Doe.',
        timestamp: '1 minute ago',
        icon: '📩'
    },
    {
        id: 2,
        title: 'Reminder',
        content: 'Don\'t forget to submit your project by Friday.',
        timestamp: '2 hours ago',
        icon: '⏰'
    },
    {
        id: 3,
        title: 'Meeting Today',
        content: 'Team meeting scheduled for 10 AM today.',
        timestamp: '5 hours ago',
        icon: '📅'
    },
    {
        id: 4,
        title: 'New Task Assigned',
        content: 'You have a new task assigned to you.',
        timestamp: '1 day ago',
        icon: '📝'
    },
];

export default function Notification() {
    return (
        <div className="notification-container">
            <Header />
            <h2 className="notification-heading">Notifications of LMS</h2>
            <div className="notification-list">
                {notifications.map(notification => (
                    <div key={notification.id} className="notification-item">
                        <div className="notification-icon">{notification.icon}</div>
                        <div className="notification-details">
                            <div className="notification-title">{notification.title}</div>
                            <div className="notification-content">{notification.content}</div>
                            <div className="notification-timestamp">{notification.timestamp}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
