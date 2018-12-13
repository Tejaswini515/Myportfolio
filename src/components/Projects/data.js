import React, { Fragment } from 'react';
import { Html5 } from 'styled-icons/fa-brands/Html5';
import { Js } from 'styled-icons/fa-brands/Js';
import { Node } from 'styled-icons/fa-brands/Node';
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';
import redux from '../../assets/images/redux.png';
import blender from '../../assets/images/blender.png';
import babylonJS from '../../assets/images/babylonJS.jpg';
import mysql from '../../assets/images/mysql.png';
import java from '../../assets/images/java.png';
import bootstrap from '../../assets/images/bootstrap.png';
import jest from '../../assets/images/jest.png';
import webrtc from '../../assets/images/webrtc.png';
import mongo from '../../assets/images/mongo.png';

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
        <img
          alt="jest"
          title="jest"
          src={jest}
          style={{ height: '40px', width: '40px' }}
        />
      </Fragment>
    ),
    srcLink: 'https://github.com/Tejaswini515/GithubRepoSearch.git',
  },
  {
    title: '3D Human Brain MRI',
    description:
      'Web Application for visualization of human brain MRI in 3D',
    technologies: (
      <Fragment>
        <Js size="40" title="JavaScript" css="color: #f7df1e;" />
        <img
          alt="blender"
          title="blender"
          src={blender}
          style={{ height: '40px', width: '40px' }}
        />
        <img
          alt="babylonJS"
          title="babylonJS"
          src={babylonJS}
          style={{ height: '40px', width: '40px' }}
        />
      </Fragment>
    ),
    srcLink: 'https://github.com/Tejaswini515/3D-Brain-MRI.git',
  },
  {
    title: 'Rest API',
    description:
      'Demonstration of REST API using Express JS',
    technologies: (
      <Fragment>
      <Node size="40" title="NodeJS" css="color: #215732;" />
      <Js size="40" title="JavaScript" css="color: #f7df1e;" />
      <img
        alt="mongo"
        title="mongo"
        src={mongo}
        style={{ height: '40px', width: '40px' }}
      />
      </Fragment>
    ),
    srcLink: 'https://github.com/Tejaswini515/NodeRestAPI.git',
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
        <Js size="40" title="JavaScript" css="color: #f7df1e;" />
      </Fragment>
    ),
    srcLink: 'https://github.com/Tejaswini515/ClothingStore3D.git',
  },
  {
    title: 'MyPortfolio',
    description:
      'portfolio using react and material UI. Filling something to fit the size as other cards. Adding extra because still there is place',
    technologies: (
      <Fragment>
        <Js size="40" title="JavaScript" css="color: #f7df1e;" />
        <ReactLogo size="40" title="ReactJS" css="color: #00d8ff;" />
      </Fragment>
    ),
    srcLink: 'https://github.com/Tejaswini515/Myportfolio.git',
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
      </Fragment>
    ),
    srcLink: 'https://github.com/Tejaswini515/BloodBank.git',
  }
];

export default data;
