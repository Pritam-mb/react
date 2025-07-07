import React from 'react';
import { useEffect } from 'react'

import { Link } from 'react-router-dom';
// import Topback from './assets/topback.png';
// import topback from '../../../assets/topback.png';
// If you encounter issues with the above import, use the following for Vite or CRA:
// const topback = require('../../../assets/topback.png');

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
     useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className='bg'>
      <div
        style={{
        //   backgroundImage: `url(${topback})`,
        
        color: 'black',
          width: '100%',
          height: '650px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomLeftRadius: '50px',
          borderBottomRightRadius: '50px',
        }}
        className="text-black text-left"
      >
        <div
          style={{
            maxWidth: '100%',
            height: '650px',
            borderBottomLeftRadius: '50px',
            borderBottomRightRadius: '50px',
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            boxShadow: '0 4px 8px rgba(0, 0, 100, 0.5)',
          }}
          className="text-left justify-center items-center"
        >
          <div style={{ maxWidth: '550px' }}>
            <h1
              style={{
                fontSize: '30px',
                color: 'white',
                fontFamily: 'old school',
                marginTop: '130px',
              }}
            >
              <span style={{ fontSize: '150px', fontWeight: 'lighter' }}>PulseGuard</span>
              <br />
              Smart Biofeedback Wearable for Heart Health & Stress Relief
            </h1>
            <p className="max-w-2xl mt-4 text-white">
              A compact, portable, IoT-enabled health companion using intelligent sensor fusion,
              vibration feedback, and fan-assisted relief for real-time cardiac and stress support.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-5">
              Get Started
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Objective Section */}
      <div className="bg-beige py-10 px-4 fade-up">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Objective</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div data-aos="fade-up" className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">Vital Monitoring</h2>
            <p className="text-gray-700">Continuously monitors heart rate, SpO₂, ECG, and respiratory rate.</p>
          </div>
          <div data-aos="fade-up" className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">Anomaly Detection</h2>
            <p className="text-gray-700">Detects tachycardia, bradycardia, and stress anomalies in real time.</p>
          </div>
          <div data-aos="fade-up" className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">Responsive Support</h2>
            <p className="text-gray-700">Triggers vibration alerts, breathing guidance, and cooling fan therapy.</p>
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="bg-white py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Target Audience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div data-aos="fade-left" className="bg-gray-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">🧓 Elderly Cardiac Patients</h3>
            <p>Arrhythmia alert, fall detection, HR monitoring</p>
          </div>
          <div data-aos="zoom-in" className="bg-gray-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">🧠 Stress & Anxiety Sufferers</h3>
            <p>Breathing regulation, calming feedback</p>
          </div>
          <div data-aos="fade-right" className="bg-gray-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">👩‍⚕️ Post-COVID Recovery</h3>
            <p>Oxygen + HR tracking with minimal intervention</p>
          </div>
          <div data-aos="fade-left" className="bg-gray-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">🧘 Wellness & Meditation</h3>
            <p>Guided breath pacing via vibration</p>
          </div>
          <div data-aos="zoom-in" className="bg-gray-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">💼 Working Professionals</h3>
            <p>Discreet stress alert + response system</p>
          </div>
          <div data-aos="fade-right" className="bg-gray-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">🏃‍♂️ Fitness Enthusiasts</h3>
            <p>Real-time vitals and performance tracking with proactive stress management</p>
          </div>
        </div>
      </div>
    </>
  );
}
