import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Proposal from './Proposal';
import Questions from './Questions';
import Gift1 from './Gift1';
import Gift2 from './Gift2';
import Gift3 from './Gift3';
import Celebration from './Celebration';
import LoveTimeline from '../src/LoveTimeline ';
import LoveCoupons from './LoveCoupons';
import VoiceMessage from './VoiceMessage';
import FinalClosure from '../src/Finalclosure';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/gift1" element={<Gift1 />} />
        <Route path="/gift2" element={<Gift2 />} />
        <Route path="/gift3" element={<Gift3 />} />
        <Route path="/celebration" element={<Celebration />} />
        <Route path="/timeline" element={<LoveTimeline />} />
        <Route path="/love-coupons" element={<LoveCoupons />} />
        <Route path="/voice-message" element={<VoiceMessage />} />
        <Route path="/final" element={<FinalClosure />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;