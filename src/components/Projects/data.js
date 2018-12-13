import React, { Fragment } from 'react';
import { Html5 } from 'styled-icons/fa-brands/Html5';
import { Js } from 'styled-icons/fa-brands/Js';
import { Node } from 'styled-icons/fa-brands/Node';
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';
import redux from '../../assets/images/redux.png';
import saga from '../../assets/images/redux-saga.png';
import d3 from '../../assets/images/d3.png';
import mongo from '../../assets/images/mongo.png';
import mysql from '../../assets/images/mysql.png';
import java from '../../assets/images/java.png';
import bootstrap from '../../assets/images/bootstrap.png';
import webrtc from '../../assets/images/webrtc.png';

const data = [
  {
    title: 'Github Repo Search',
    description:
      'Application to search github repositories of specific user using GitHub-API',
    technologies: (
      <Fragment>
        <ReactLogo size="40" title="ReactJS" css="color: #00d8ff;" />
        <img
          alt="redux"
          title="redux"
          src={redux}
          style={{ height: '40px', width: '40px' }}
        />
        <Node size="40" title="NodeJS" css="color: #215732;" />
        <Js size="40" title="JavaScript" css="color: #f7df1e;" />
      </Fragment>
    ),
    srcLink: 'https://github.com/Tejaswini515/GithubRepoSearch.git',
    demoLink: 'https://github.com/Tejaswini515/GithubRepoSearch.git'
  },
  {
    title: '3D Human Brain MRI',
    description:
      'Web Application for visualization of human brain MRI in 3D',
    technologies: (
      <Fragment>
        <ReactLogo size="40" title="ReactJS" css="color: #00d8ff;" />
        <Node size="40" title="NodeJS" css="color: #215732;" />
        <Js size="40" title="JavaScript" css="color: #f7df1e;" />
        <img
          alt="mongodb"
          title="mongodb"
          src={mongo}
          style={{ height: '40px', width: '40px' }}
        />
      </Fragment>
    ),
    srcLink: 'https://github.com/Tejaswini515/3D-Brain-MRI.git',
    demoLink: 'https://github.com/Tejaswini515/3D-Brain-MRI.git'
  },
  {
    title: 'Face Detection',
    description:
      'Web application for face detection using a third party API in ReactJS',
    technologies: (
      <Fragment>
        <img
          alt="java"
          title="java"
          src={java}
          style={{ height: '40px', width: '40px' }}
        />
        <img
          alt="mysql"
          title="mysql"
          src={mysql}
          style={{ height: '40px', width: '40px' }}
        />
        <Html5 size="40" title="HTML5" css="color: #e34f26;" />
        <img
          alt="bootstrap"
          title="bootstrap"
          src={bootstrap}
          style={{ height: '40px', width: '40px' }}
        />
        <Js size="40" title="JavaScript" css="color: #f7df1e;" />
      </Fragment>
    ),
    srcLink: 'https://github.com/raghavyadavm/',
    demoLink: 'https://github.com/raghavyadavm/'
  },
  {
    title: '3D Clothing Store',
    description:
      '3D online clothing store for enhancing the user experience and designed the 3D clothes for human model using blender',
    technologies: (
      <Fragment>
        <ReactLogo size="40" title="ReactJS" css="color: #00d8ff;" />
        <img
          alt="redux"
          title="redux"
          src={redux}
          style={{ height: '40px', width: '40px' }}
        />
        <img
          alt="d3.js"
          title="d3.js"
          src={d3}
          style={{ height: '40px', width: '40px' }}
        />
        <Js size="40" title="JavaScript" css="color: #f7df1e;" />
        <Node size="40" title="NodeJS" css="color: #215732;" />
      </Fragment>
    ),
    srcLink: 'https://github.com/Tejaswini515/ClothingStore.git',
    demoLink: 'https://github.com/Tejaswini515/ClothingStore.git'
  },
  {
    title: 'Video Chat',
    description:
      'Single Page Web application for online teaching purpose with features like screen-share, chat and file-share',
    technologies: (
      <Fragment>
        <ReactLogo size="40" title="ReactJS" css="color: #00d8ff;" />
        <img
          alt="redux"
          title="redux"
          src={redux}
          style={{ height: '40px', width: '40px' }}
        />
        <img
          alt="redux-saga"
          title="redux-saga"
          src={saga}
          style={{ height: '40px', width: '40px' }}
        />
        <img
          alt="webrtc"
          title="webrtc"
          src={webrtc}
          style={{ height: '40px', width: '40px' }}
        />
        <Node size="40" title="NodeJS" css="color: #215732;" />
      </Fragment>
    ),
    srcLink: 'https://github.com/raghavyadavm/VideoChat',
    demoLink: 'https://eskns.com/virtualchat'
  },
  {
    title: 'Blood Bank Web App',
    description:
      'Web Application which provides a communication platform between blood donors and receivers',
    technologies: (
      <Fragment>
        <img
          alt="java"
          title="java"
          src={java}
          style={{ height: '40px', width: '40px' }}
        />
        <img
          alt="mysql"
          title="mysql"
          src={mysql}
          style={{ height: '40px', width: '40px' }}
        />
        <img
          alt="bootstrap"
          title="bootstrap"
          src={bootstrap}
          style={{ height: '40px', width: '40px' }}
        />
        <Js size="40" title="JavaScript" css="color: #f7df1e;" />
      </Fragment>
    ),
    srcLink: 'https://github.com/Tejaswini515/BloodBank.git',
    demoLink: 'https://github.com/Tejaswini515/BloodBank.git'
  }
];

export default data;
