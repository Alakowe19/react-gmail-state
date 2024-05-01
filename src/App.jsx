import { useState, useEffect } from 'react';
import Header from './components/Header';
import initialEmails from './data/emails';
import './styles/App.css';

function App() {
  const [emails, setEmails] = useState(initialEmails);

  // State for tracking number of starred and read emails
  const [starredCount, setStarredCount] = useState(0);
  const [readCount, setReadCount] = useState(0);

  // Update counts whenever emails change
  useEffect(() => {
    const starredEmails = emails.filter((email) => email.starred);
    const readEmails = emails.filter((email) => email.read);

    setStarredCount(starredEmails.length);
    setReadCount(readEmails.length);
  }, [emails]);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li className="item active">
            <span className="label">Inbox</span>
            <span className="count">{readCount}</span>
          </li>
          <li className="item">
            <span className="label">Starred</span>
            <span className="count">{starredCount}</span>
          </li>
          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul className="email-list">
          {emails.map((email, index) => (
            <li key={index} className={`email ${email.read ? 'read' : 'unread'}`}>
              <div className="select">
                <input className="select-checkbox" type="checkbox" />
              </div>
              <div className="star">
                <input className="star-checkbox" type="checkbox" />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
