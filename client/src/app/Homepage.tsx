import React from 'react';

interface Purchase {
    id: number;
    item: string;
    amount: number;
    date: string;
}

const recentPurchases: Purchase[] = [
    { id: 1, item: 'Coffee', amount: 3.5, date: '2023-10-01' },
    { id: 2, item: 'Book', amount: 12.99, date: '2023-10-02' },
    { id: 3, item: 'Groceries', amount: 45.23, date: '2023-10-03' },
    { id: 4, item: 'Movie Ticket', amount: 10.0, date: '2023-10-04' },
    { id: 5, item: 'Lunch', amount: 8.75, date: '2023-10-05' },
];

const Homepage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Money Whisperer</h1>
            <section>
                <h2>Recent Purchases</h2>
                <ul>
                    {recentPurchases.map(purchase => (
                        <li key={purchase.id}>
                            {purchase.item} - ${purchase.amount} on {purchase.date}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Alerts</h2>
                <p>No new alerts</p>
            </section>
        </div>
    );
};

export default Homepage;