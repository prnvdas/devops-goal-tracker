import React, { useState } from 'react';

function CertificationTracker() {
  const [cert, setCert] = useState("");
  const [certList, setCertList] = useState([]);

  const addCert = () => {
    if (cert.trim() !== "") {
      setCertList([...certList, cert]);
      setCert("");
    }
  };

  return (
    <div>
      <h2>🎓 Certification Tracker</h2>
      <input 
        type="text" 
        placeholder="Enter certification name..." 
        value={cert} 
        onChange={(e) => setCert(e.target.value)}
      />
      <button onClick={addCert}>Add Certification</button>

      <ul>
        {certList.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default CertificationTracker;

