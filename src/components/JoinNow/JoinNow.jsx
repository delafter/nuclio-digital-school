import React from 'react';
import './JoinNow.css';

const JoinNow = () => {
    return (
        <div className="join-now">
            <h1>Join Now</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Join Now</button>
            </form>
        </div>
    );
};

export default JoinNow;