import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog'>
            <div class="blogs mt-3">
                <div class="card-header">
                    <h1>Difference between authorization and authentication</h1>
                </div>
                <div class="card-body">
                    <p class="card-text fs-5">
                        Authentication is the process of determining a user's identity and validating it using the available credentials. Here are several methods for verifying one's identity: To get access to the system, one can utilize usernames or passwords to establish one's identity. Another technique to gain access to the system for a single transaction is to use an OTP. Apps that employ a third party to generate security codes, allowing the user access Biometrics such as an eye scan or fingerprints can be used to grant access. Some systems may necessitate numerous factors for successful verification. <br /> <br />
                        Authorization, on the other hand, is the process of granting access to a system. Authentication is frequently followed by authorization, which is classified into several forms. They are as follows: Single-Factor Authentication (SFA) entails using only a login and password to get access to the system. Two-level security necessitates a two-step verification process, allowing the user to get access to the system. Along with the login and password, some unique information, such as security questions, such as the first school name and other facts, is required for this process. OTP can also be used to verify the user's identity. Multiple levels of security from various independent categories are required for advanced level secure authorization.
                    </p>
                </div>
            </div>
            <div class="blogs mt-3">
                <div class="card-header">
                    <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                </div>
                <div class="card-body">
                    <p class="card-text fs-5">
                        It's simple to get started with Firebase or add it to an existing project. It supports real-time database connections, allowing numerous users to see changes in the data as they are made or changed. Web sockets handle data transmission, so you don't have to send requests for new data; I only need to subscribe once. The same may be said for file storage. Authentication via the major providers can be set up quickly (Google, Twitter, Facebook, GitHub). Https by default encrypts http communication without requiring the installation of certificates. It is possible to host any static html/javascript material.
                        Authentication alternatives include: API Key Authentication for HTTP Basic Authentication Authentication with OAuth There is no authentication.
                    </p>
                </div>
            </div>
            <div class="blogs mt-3">
                <div class="card-header">
                    <h1>What other services does firebase provide other than authentication?</h1>
                </div>
                <div class="card-body">
                    <p class="card-text fs-5">
                        1. Messaging in the Cloud:
                        Everyone, in some form or another, requires alerts in their mobile applications to increase user engagement. Firebase is an excellent solution for implementing notifications, regardless of platform, because it is quick, dependable, and scalable. Furthermore, you will not be charged anything for using this service because it is completely free.
                        <br /> <br />
                        2. Links that are dynamic:
                        This service was previously known as Google URL Shortener, but it has now been renamed Dynamic Links. Aside from their name, Firebase Team has added a couple of new capabilities to this service.
                        <br /> <br />
                        3. Prognosis:
                        As the name implies, this service assists you in making product decisions predictions. This service, in my opinion, is critical for growing your business and money. You can use this service to divide people into distinct segments and make judgments based on their behavior without having any machine learning knowledge.
                        Google Analytics is number four.
                        Another service that aids in the growth and management of your company. It can be used to track user demographics, behavior, purchasing trends, and revenue statistics, among other things.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;